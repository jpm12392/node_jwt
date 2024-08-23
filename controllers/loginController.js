const User = require('../models/User');



exports.userLogin = async (request, response) => {
    try {
        const { username, email } = request.body;
        const user = User.findOne({
            where: {
                username: username
            }
        });

        
        response.status(200).json({"status":true,'meddage':"Login successfully", "data":[]});
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};