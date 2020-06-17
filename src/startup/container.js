const { createContainer, asValue, asClass, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('./');

//services
const { HomeService } = require('../services/');

//controllers
const { HomeController } = require('../controllers');

//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//models 
const { User, Comment, Idea } = require('../models');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).
register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
});

module.exports = container;