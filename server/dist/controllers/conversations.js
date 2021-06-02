"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.getConversation = exports.getAllConversations = exports.createConversation = void 0;
const Message_1 = require("../models/Message");
const Conversation_1 = require("../models/Conversation");
const createConversation = async (req, res, next) => {
    try {
        const convoExists = await Conversation_1.Conversation.find({
            subscribers: { $all: req.body },
        });
        if (convoExists.length) {
            res.status(202).json({
                message: "Returning conversation matching the query",
                data: convoExists,
            });
        }
        else {
            const conversation = await Conversation_1.Conversation.create(req.body);
            res.status(201).json({
                message: "Creating and returning new conversation",
                data: conversation,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message ? error.message : error,
        });
    }
};
exports.createConversation = createConversation;
const getAllConversations = async (req, res, next) => {
    try {
        const conversations = await Conversation_1.Conversation.find();
        res.status(200).json({
            message: "Returning a list of all stored conversations",
            data: conversations,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
exports.getAllConversations = getAllConversations;
const getConversation = async (req, res, next) => {
    try {
        if (req.body.subscribers.length !== 2)
            throw "The request object needs to include two subscribers";
        const conversation = await Conversation_1.Conversation.find({
            subscribers: { $all: req.body.subscribers },
        });
        res.status(200).json({
            message: "Returning the conversation(s) matching the query",
            data: conversation,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
exports.getConversation = getConversation;
const createMessage = async (req, res, next) => {
    try {
        const userArray = [req.body.author, req.body.recipient];
        if (userArray.length !== 2)
            throw "The request object needs to include an author and a recipient";
        const message = new Message_1.Message(req.body);
        const conversation = await Conversation_1.Conversation.findOneAndUpdate({ subscribers: { $all: [req.body.author, req.body.recipient] } }, {
            $push: {
                messages: message,
            },
        }, 
        // If option new is set to true returns the updated document
        { new: true });
        res.status(200).json({
            message: "Returning the updated conversation",
            data: conversation,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
exports.createMessage = createMessage;
