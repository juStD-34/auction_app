const notificationRouter = require('express').Router();
const Notification = require("../Model/NotificationModel");


const getNotificationApi = "/getNotification/:userID"

notificationRouter.get(getNotificationApi, async (req, res) => {
    const { userID } = req.params
    try {
        const result = await Notification.find({
            receiverID: userID
        })
        res.status(201).json({ success: true, message: "Get notification successfully", result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})


module.exports = notificationRouter;
