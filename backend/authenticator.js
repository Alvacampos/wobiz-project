const express = require('express');
const app = express();
const { getDb } = require('./db.js');
const jwt = require('jsonwebtoken');
const jwtKey = 'auth';
const jwtExpirySeconds = 300;

const collections = getDb().collection('auth');

// Sign In
app.post('/login', async (req, res) => {
  var tokenId = null;
  const logInUser = req.body;
  let user = {};
  try {
    user = await collections.findOne({ mail: logInUser.mail });
    if (user && user.password === logInUser.password) {
      tokenId = jwt.sign({ sub: 'user', user: user._id }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpirySeconds,
      });
      return res.send(200, {
        success: true,
        token: tokenId,
        expires: jwtExpirySeconds,
        user_id: user._id,
      });
    } else if (!user) {
      return res.send(401, {
        success: false,
        code: 106,
        message: "Wrong username"
      });
    } else {
      return res.send(401, {
        success: false,
        code: 106,
        message: 'Wrong password for user',
      });
    }
  } catch (e) {
    console.log(e);
    return res.send(400);
  }
});

module.exports = app;
