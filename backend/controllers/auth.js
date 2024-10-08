const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

 const RegisterUser = async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({ message: 'User already exists' });

        const hashPassword = await bcrypt.hash(password.toString(),10);
        user = new User({name,email,password:hashPassword})
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

 const LoginUser = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
      }
}


const FetchUser = async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports = {
    RegisterUser,
    LoginUser,
    FetchUser
}