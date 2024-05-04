const jwt = require("jsonwebtoken");
const User = require("../Model/UserModel");

module.exports.userVerification = async (req, res, next) => {
    if (!req.cookies || !req.cookies.token) {
        return res.status(401).json({ status: false, message: 'No token provided.' });
    }

    const token = req.cookies.token;


    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ status: false, message: 'Token expired.' });
            } else if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ status: false, message: 'Invalid token.' });
            } else {
                return res.status(500).json({ status: false, message: 'Internal server error.' });
            }
        }

        // If the token is valid, attempt to find the user by ID from the token data
        try {
            const user = await User.findById(data.id);

            if (user) {
                // Attach the authenticated user to req.user
                req.user = user;
                // Proceed to the next middleware or route handler
                return next();
            } else {
                return res.status(401).json({ status: false, message: 'User not found.' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: false, message: 'Internal server error.' });
        }
    });
};
