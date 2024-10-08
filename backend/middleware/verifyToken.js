const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
        console.log(error)
      res.status(401).json({ message: 'Invalid token' });
    }
  }

  module.exports = {
    verifyToken
  }