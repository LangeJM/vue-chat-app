import { Router } from "express";

import {
  createUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/users";

const router = Router();

router.post("/", createUser);

router.get("/", getAllUsers);

router.get("/getOne", getUser);

router.patch("/", updateUser);

export default router;
