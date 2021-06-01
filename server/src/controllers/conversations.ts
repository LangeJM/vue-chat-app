import { RequestHandler } from "express";

import { Message } from "../models/Message";
import { Conversation } from "../models/Conversation";

export const createConversation: RequestHandler = async (req, res, next) => {
  try {
    const convoExists = await Conversation.find({
      subscribers: { $all: req.body.subscribers },
    });
    if (convoExists.length) {
      res.status(202).json({
        message: "Returning conversation matching the query",
        data: convoExists,
      });
    } else {
      const conversation = await Conversation.create(req.body);
      res.status(201).json({
        message: "Creating and returning new conversation",
        data: conversation,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message ? error.message : error,
    });
  }
};

export const getAllConversations: RequestHandler = async (req, res, next) => {
  try {
    const conversations = await Conversation.find();

    res.status(200).json({
      message: "Returning a list of all stored conversations",
      data: conversations,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const getConversation: RequestHandler = async (req, res, next) => {
  try {
    if (req.body.subscribers.length !== 2)
      throw "The request object needs to include two subscribers";

    const conversation = await Conversation.find({
      subscribers: { $all: req.body.subscribers },
    });

    res.status(200).json({
      message: "Returning the conversation(s) matching the query",
      data: conversation,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const createMessage: RequestHandler = async (req, res, next) => {
  try {
    const userArray: string[] = [req.body.author, req.body.recipient];
    if (userArray.length !== 2)
      throw "The request object needs to include an author and a recipient";

    const message = new Message(req.body);

    const conversation = await Conversation.findOneAndUpdate(
      { subscribers: { $all: [req.body.author, req.body.recipient] } },
      {
        $push: {
          messages: message,
        },
      },
      // If option new is set to true returns the updated document
      { new: true }
    );
    // console.log(
    //   `New Message Created, this should trigger a websocket event for user: ${req.body.recipient}`
    // );

    res.status(200).json({
      message: "Returning the updated conversation",
      data: conversation,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
