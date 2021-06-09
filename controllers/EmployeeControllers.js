const Employee = require('../models/Employee');

const index = (req, res, next) =>{
    Employee.find()
        .then((response) =>{
            res.json({
                response,
            })
        })
        .catch((error) => {
            res.json({
                message: 'index 에러 발생',
            })
        })
}

module.exports = {
    index, show, store
};