import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js"

export const getConversations = async (req,res,next) =>{
    try {
        const conversation = await Conversation.find(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}).sort({updatedAt: -1});
        if(!conversation) return next(createError(404,"No Conversations Exist."));

        res.status(200).send(conversation);
    } catch (error) {
        next(error)    
    }
}
export const getConversation = async (req,res,next) =>{
    try {
        const conversation = await Conversation.findOne({id: req.params.id});
        if(!conversation) return next(createError(404,"Conversation not found."));
        res.status(200).send(conversation);
    } catch (error) {
        next(error)    
    }
}

export const createConversation = async (req,res,next) =>{
    const newConversation = new Conversation({
        ...req.body,
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    })
    try {
        await newConversation.save();
        res.status(201).send(newConversation);    
    } catch (error) {
        next(error)    
    }
}

export const updateConversation = async (req,res,next) =>{
    try {
        const updatedConversation = await Conversation.findOneAndUpdate({id: req.params.id},{
            $set:{
                readBySeller: true,
                readByBuyer: true,
            },
        }, {new: true});
        
        res.status(200).send(updatedConversation);   
    } catch (error) {
        next(error)    
    }
}