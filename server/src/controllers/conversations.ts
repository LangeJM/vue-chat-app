import { RequestHandler } from "express";
// import { Conversation } from "../models/Conversation"   ;
const Conversation = require("../models/Conversation");

// const CONVERSATIONS: Conversation[] = [];

export const createConversation: RequestHandler = async (req, res, next) => {
  const conversation = await Conversation.create(req.body);

  res.status(201).json({
    message: "Successfully created new conversation",
    createdConversation: conversation,
  });
};

export const getAllConversations: RequestHandler = (req, res, next) => {
  res.status(201).json({
    message: "List of all stored conversations",
    // allConversations: CONVERSATIONS,
  });
};

export const getConversation: RequestHandler = (req, res, next) => {
  const id = (req.params as { id: string }).id;
  // const convo = CONVERSATIONS.filter((convo) => convo.id === id)[0];
  // console.log(convo);

  // if (convo) {
  //   res.status(201).json({
  //     message: `Successfully retrieved conversation with id ${id}`,
  //     convo,
  //   });
  // } else {
  //   res.status(404).json({
  //     message: `No conversation with id ${id} on record`,
  //   });
  // }
};
