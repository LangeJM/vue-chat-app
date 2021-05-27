import { Router } from "express";

import {
  createConversation,
  getAllConversations,
  getConversation,
} from "../controllers/conversations";

const router = Router();

router.post("/", createConversation);

router.get("/", getAllConversations);

router.get("/:id", getConversation);

router.patch("/:id");

export default router;
