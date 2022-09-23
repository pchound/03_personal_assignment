//This code will use express, instead of the outdated way
const contacts_controller = require('../controllers/contacts_controller');
const express = require('express');
const router = express.Router();

//Post function
router.post('/names',function(req, res)
{
    res.send({type: 'GET'});
})

module.exports = router;