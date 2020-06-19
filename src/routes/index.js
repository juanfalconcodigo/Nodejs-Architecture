const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

module.exports = function({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes.use(express.urlencoded({ extended: true })).use(express.json()).use(cors()).use(helmet()).use(compression());
    apiRoutes.use('/home', HomeRoutes);
    apiRoutes.use('/user', UserRoutes);
    apiRoutes.use('/idea', IdeaRoutes);
    apiRoutes.use('/comment', CommentRoutes);
    apiRoutes.use('/auth', AuthRoutes);

    router.use('/v1/api', apiRoutes);

    //se coloca el final papu
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}