let db = require("../../database/models");

const dashboardController = {
    index: (req, res) => {
        return res.render('./admin/dashboard');
    } ,    
}

module.exports = dashboardController;
