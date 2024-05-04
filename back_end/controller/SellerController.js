const auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {
    const { auctionName, productName, productType, productImg, timeStart, timeEnd, startPrice, sellerID } = req.body;
    //this is not complete version. Img need to turn into binary.
    try {
        const newAuction = await auction.create({
            name: auctionName,
            product: {
                name: productName,
                type: productType,
                img: productImg // Dữ liệu hình ảnh đã được chuyển đổi
            },
            timeStart,
            timeEnd,
            startPrice,
            participants: [],
            sellerID,
        });
        res.status(201).json({
            success: true,
            message: "Auction created successfully",
            newAuction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}