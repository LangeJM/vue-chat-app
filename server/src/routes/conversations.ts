import { Router } from "express";

import {
  createConversation,
  getAllConversations,
  getConversation,
  createMessage,
} from "../controllers/conversations";

import { checkJwt } from "../auth/auth_config";

const router = Router();

router.post("/", checkJwt, createConversation);

router.get("/", checkJwt, getAllConversations);

router.get("/getOne", checkJwt, getConversation);

router.patch("/message", checkJwt, createMessage);

export default router;
