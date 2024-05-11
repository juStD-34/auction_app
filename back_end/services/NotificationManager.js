const notificationRouter = require('express').Router();
const Notification = require("../Model/NotificationModel");
const User = require("../Model/UserModel");


const getNotificationApi = "/getNotification/:userID"
const updateNotificationApi = "/updateNotification";
const markAllAsReadApi = "/markAllAsRead";

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


notificationRouter.post(updateNotificationApi, async (req, res) => {
    const { notificationID } = req.body;

    try {
        const result = await Notification.findByIdAndUpdate(notificationID, { status : 'read'});
        res.status(201).json({ success: true, message: "Update notification successfully", result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

notificationRouter.post(markAllAsReadApi, async (req, res) => {
    const { userID } = req.body;
    try {
        const user = await User.findById(userID);
        if(!user) return res.status(404).json({ success: false, message: "User not found" })
        const result = await Notification.updateMany({receiverID: userID, status: 'unread'}, {status : 'read'});
        res.status(201).json({ success: true, message: "Update notification successfully", result })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})


module.exports = notificationRouter;
