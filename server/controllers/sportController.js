const passport = require('passport');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";

//------------ User Model ------------//
const Sport = require('../models/Sport');

//------------ Get Sports ------------//
exports.getSports = (req, res, next) => {
    Sport.find(req.query)
    .then((sports) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sports);
    }, (err)=> next(err))
    .catch((err) => next(err));
}

//------------ Post Sports ------------//
exports.postSports = (req, res, next) => {
    const newSport = new Sport(req.body);
    res.json(req.body);
    newSport.save()
    .then((sport) => {
        console.log('Sport created', sport);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err)=> next(err))
    .catch((err) => next(err));
}

//------------ Delete Sport by ID ------------//
exports.deleteSports = (req, res, next) => {
    Sport.findByIdAndRemove(req.params.sportId)
    .then((sport) => {
        console.log('Sport removed', sport);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err)=> next(err))
    .catch((err) => next(err));
}
