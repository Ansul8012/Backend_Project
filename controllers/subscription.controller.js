import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
  try {
    const subscriptionData = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: subscriptionData });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Convert both to strings to compare correctly
    if (req.user._id.toString() !== req.params.id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view this user's subscriptions",
      });
    }

    const userId = req.params.id;
    const subscriptions = await Subscription.find({ user: userId });

    if (!subscriptions.length) {
      return res.status(404).json({
        success: false,
        message: 'No subscriptions found for this user',
      });
    }

    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};
