import { RequestHandler } from "express";
// import { Conversation } from "../models/Conversation"   ;
const Conversation = require("../models/Conversation");

// const CONVERSATIONS: Conversation[] = [];

export const createConversation: RequestHandler = async (req, res, next) => {
  try {
    const convoExists = await Conversation.find({
      subscribers: { $all: req.body.subscribers },
    });
    if (convoExists.length)
      throw "A conversation for these subscribers already exists";

    const conversation = await Conversation.create(req.body);

    res.status(201).json({
      message: "Successfully created new conversation",
      data: conversation,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
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
