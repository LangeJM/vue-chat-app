import { Router } from "express";

import {
  createUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/users";

import { checkJwt } from "../auth/auth_config";

const router = Router();

router.post("/", checkJwt, createUser);

router.get("/", checkJwt, getAllUsers);

router.get("/getOne", checkJwt, getUser);

router.patch("/", checkJwt, updateUser);

export default router;
