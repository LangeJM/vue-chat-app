import { RequestHandler } from "express";

import { Conversation } from "../models/conversation";

const CONVERSATIONS: Conversation[] = [];

export const createConversation: RequestHandler = (req, res, next) => {
  const email = (req.body as { email: string[] }).email;
  const newConversation = new Conversation(
    Math.random().toString().split(".")[1],
    email,
    new Date(Date.now())
  );

  CONVERSATIONS.push(newConversation);
  res.status(201).json({
    message: "Successfully created new conversation",
    createdConversation: newConversation,
  });
};

export const getAllConversations: RequestHandler = (req, res, next) => {
  res.status(201).json({
    message: "List of all stored conversations",
    allConversations: CONVERSATIONS,
  });
};

export const getConversation: RequestHandler = (req, res, next) => {
  const id = (req.params as { id: string }).id;
  const convo = CONVERSATIONS.filter((convo) => convo.id === id);
  res.status(201).json({
    message: `Requested conversation with id ${id}`,
    convo,
  });
};
