import { Router } from "express";

import {
  createConversation,
  getAllConversations,
  getConversation,
  createMessage,
} from "../controllers/conversations";

const router = Router();

router.post("/", createConversation);

router.get("/", getAllConversations);

router.get("/getOne", getConversation);

router.patch("/message", createMessage);

export default router;
