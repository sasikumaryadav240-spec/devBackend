import express from "express";
import "dotenv/config";
import mongoDb from "./controller/mongoDb.js";
import helmet from "helmet";
import rateLimitForLogin from "./secureLayer/rateLimitsforLogin.js";
import cors from "cors";
import authRouter from "./router/authRouter.js";
import postRouter from "./router/postRouter.js";
import { jwtVerify } from "./middleware/accessController.js";
import commentRouter from "./router/commentRouter.js";
import followRouter from "./router/followRouter.js";
import profileRouter from "./router/profileRouter.js";
import postBussinessLogicRouter from "./router/postBussinessLogic.js";
import commentsLogicForLogic from "./router/commentsLogicRouter.js";
import followingLogic from "./router/followLogicRouter.js";

const app = express();

app.use(helmet());

app.use(rateLimitForLogin);

app.use(cors({
  origin: 'http://localhost:5173', // Your frontend address
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

mongoDb();

app.use(express.json()); 

app.use("/api/auth", authRouter);

app.use("/api", jwtVerify , postRouter);

app.use("/api", jwtVerify, commentRouter);

app.use("/api/", jwtVerify, followRouter);

app.use("/api", jwtVerify, profileRouter);

app.use("/api", jwtVerify, postBussinessLogicRouter);

app.use("/api", jwtVerify, commentsLogicForLogic);

app.use("/api", jwtVerify, followingLogic);

app.listen(parseInt(process.env.PORT) || 3000);