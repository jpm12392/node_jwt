const User = require('../models/User');



// Controller to get all user
exports.getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll({
            where: {
                role_id: 2,
            },
            order: [['createdAt', 'DESC']]
        });
        response.status(200).json({"status":true,"message":"Data found successfully", "data":users});
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};