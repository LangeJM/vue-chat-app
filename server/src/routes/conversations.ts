import { Router } from "express";

import {
  createConversation,
  getAllConversations,
  getConversation,
} from "../controllers/conversations";

const router = Router();

router.post("/", createConversation);

router.get("/", getAllConversations);

router.get("/getOne", getConversation);

router.patch("/:id");

export default router;
