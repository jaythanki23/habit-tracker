import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from '../model/userModel.js';

// @desc Register user
// @route /api/users/register 
// @acces Public
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all the fields');
  }

  // check if user already exists
  const userExists = await User.findOne({email});
  if(userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if(user) {
    res.status(201).json({
      // id: user._id,
      // name: user.name,
      // email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

})

// @desc Login user
// @route /api/users/login
// @acces Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400);
    throw new Error('Please add all the fields');
  }

  // get the user
  const user = await User.findOne({email});

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      // id: user._id,
      // name: user.name,
      // email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
})

// @desc Get user data
// @route /api/users/me
// @acces Private
const getMe = asyncHandler(async (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  }) 
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export { register, login, getMe }

