require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const recipes = require('./recipes/recipe-router');

const server = express();

server.use(helmet());
server.use('/api/recipes', recipes);

server.use('/', (req,res) => {
    res.status(200).json('Welcome to my Api')
})

module.exports = server;