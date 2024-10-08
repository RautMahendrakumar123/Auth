const express = require('express')
const { RegisterUser, LoginUser, FetchUser } = require('../controllers/auth');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router()

router.post('/signup',RegisterUser);

router.post('/signin',LoginUser);

router.get('/me',verifyToken,FetchUser);

module.exports = router;