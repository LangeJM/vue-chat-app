"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = exports.getAllConversations = exports.createConversation = void 0;
// import { Conversation } from "../models/Conversation"   ;
const Conversation = require("../models/Conversation");
// const CONVERSATIONS: Conversation[] = [];
const createConversation = async (req, res, next) => {
    const conversation = await Conversation.create(req.body);
    res.status(201).json({
        message: "Successfully created new conversation",
        createdConversation: conversation,
    });
};
exports.createConversation = createConversation;
const getAllConversations = (req, res, next) => {
    res.status(201).json({
        message: "List of all stored conversations",
        // allConversations: CONVERSATIONS,
    });
};
exports.getAllConversations = getAllConversations;
const getConversation = (req, res, next) => {
    const id = req.params.id;
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
exports.getConversation = getConversation;
