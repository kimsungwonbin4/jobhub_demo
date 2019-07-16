const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));




module.exports = router;