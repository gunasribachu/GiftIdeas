const Gift = require("../models/gift")
exports.getGifts = async (req,res) => {
    try {
        const {occasion,sort } = req.query;
        let filter = {};
        if (occasion) {
            filter.occasion = occasion;
        }
        let query = Gift.find(filter);
        if (sort === "price") {
            query = query.sort({ price: 1 });
        }
        const gifts = await query;
        res.status(200).json(gifts);
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.getGiftById = async (req,res) => {
    try {
        const gift = await Gift.findById(req.params.id);
        if (!gift) {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        res.status(200).json(gift);
    }
    catch(error) {
        res.status(400).json({
            message: "Invalid id"
        });
    }
}

exports.getGiftTotal = async (req,res) => {
    try {
        const result = await Gift.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$price"
                    }
                }
            }
        ]);
        res.status(200).json({
            total: result[0]?.total || 0
        });
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.postGifts = async (req,res) => {
    try {
        const gift = await Gift.create(req.body);
        res.status(201).json(gift);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

exports.putGiftById = async (req,res) => {
    try {
        const gift = await Gift.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!gift) {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        res.status(200).json(gift);
    }
    catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

exports.deleteGiftById = async (req,res) => {
    try {
        const gift = await Gift.findByIdAndDelete(req.params.id);
        if (!gift) {
            return res.status(404).json({
                message: "Gift not found"
            });
        }
        res.status(200).json({
            message: "Gift deleted successfully"
        });
    } 
    catch(error) {
        res.status(400).json({
            message: "Invalid id"
        });
    }
}