import { RequestHandler } from "express";

import { User } from "../models/User";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const userExists = await User.find({
      email: { $all: req.body.email },
    });
    if (userExists.length) {
      res.status(201).json({
        message: "Returning already existing user",
        data: userExists,
      });
    } else {
      const user = await User.create(req.body);

      res.status(201).json({
        message: "Successfully created new user",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "Returning a list of all stored users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.find({
      email: { $all: req.body.email },
    });

    res.status(200).json({
      message: "Returning the user matching the query",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    if (req.body.online !== undefined && req.body.online.toString()) {
      const user = await User.findOneAndUpdate(
        { email: { $all: req.body.email } },
        {
          online: req.body.online,
        },
        // If option new is set to true returns the updated document
        { new: true }
      );

      res.status(200).json({
        message: "Returning the updated conversation",
        data: user,
      });
    } else throw "No update information included";
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const setUserOnline: Function = async (
  email: String,
  socketID: String
) => {
  try {
    if (email && socketID) {
      const user = await User.findOneAndUpdate(
        { email: email },
        {
          socketID: socketID,
          online: true,
        },
        // If option new is set to true returns the updated document
        { new: true }
      );
      console.log(
        `New status of user ${user.email} with sockedID ${socketID} is` +
          " ONLINE".green
      );
    } else throw "No user information included";
  } catch (error) {
    console.log(error);
  }
};

export const setUserOffline: Function = async (socketID: String) => {
  try {
    if (socketID) {
      const user = await User.findOneAndUpdate(
        { socketID: socketID },
        {
          socketID: "",
          online: false,
        },
        // If option new is set to true returns the updated document
        { new: true }
      );
      console.log(
        `New status of user with sockedID ${socketID} is` + " OFFLINE".red
      );
    } else throw "No user information included";
  } catch (error) {
    console.log(error);
  }
};
