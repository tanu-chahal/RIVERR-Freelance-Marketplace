import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import Stripe from "stripe";


export const intent = async (req, res, next) =>{
    const stripe = new Stripe(process.env.STRIPE_KEY);

    const gig = await Gig.findById(req.params.id)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price*100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      const newOrder = new Order({
        ...req.body,
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        paymentIntent: paymentIntent.id,
    });
    await newOrder.save();

    res.status(200).send({clientSecret: paymentIntent.client_secret});
}

export const getOrders = async(req,res) =>{
    try {
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
            isCompleted: true,
        });

        res.status(200).send(orders);  
    } catch (error) {
        next(error)    
    }
}