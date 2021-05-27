"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = exports.getAllConversations = exports.createConversation = void 0;
const conversation_1 = require("../models/conversation");
const CONVERSATIONS = [];
const createConversation = (req, res, next) => {
    const email = req.body.email;
    const newConversation = new conversation_1.Conversation(Math.random().toString().split(".")[1], email, new Date(Date.now()));
    CONVERSATIONS.push(newConversation);
    res.status(201).json({
        message: "Successfully created new conversation",
        createdConversation: newConversation,
    });
};
exports.createConversation = createConversation;
const getAllConversations = (req, res, next) => {
    res.status(201).json({
        message: "List of all stored conversations",
        allConversations: CONVERSATIONS,
    });
};
exports.getAllConversations = getAllConversations;
const getConversation = (req, res, next) => {
    const id = req.params.id;
    const convo = CONVERSATIONS.filter((convo) => convo.id === id)[0];
    console.log(convo);
    if (convo) {
        res.status(201).json({
            message: `Successfully retrieved conversation with id ${id}`,
            convo,
        });
    }
    else {
        res.status(404).json({
            message: `No conversation with id ${id} on record`,
        });
    }
};
exports.getConversation = getConversation;
