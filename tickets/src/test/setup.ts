//import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}

jest.mock("../nats-wrapper");

let mongo: any;

beforeAll(async () => {
  jest.clearAllMocks();
  process.env.JWT_KEY = "789788";
  /*  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  });*/
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tickets");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  //mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  //Bild a JWT payload. {id, email}
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };
  //create the jwt
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  //build session object {jwt: MY_JWT}
  const session = { jwt: token };
  //Turn session into  json
  const sessionJSON = JSON.stringify(session);
  //Take json and encode it as base 64
  const base64 = Buffer.from(sessionJSON).toString("base64");
  //return a string thats the cookie with the encoded data
  return [`session=${base64}`];
};
