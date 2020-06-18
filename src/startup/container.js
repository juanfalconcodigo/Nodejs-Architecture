const { createContainer, asValue, asClass, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('./');

//services
const { HomeService, CommentService, IdeaService, UserService } = require('../services/');

//controllers
const { HomeController, UserController, CommentController, IdeaController } = require('../controllers');

//routes
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//models 
const { User, Comment, Idea } = require('../models');

//repositories
const { UserRepository, CommentRepository, IdeaRepository } = require('../repositories');


const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        IdeaService: asClass(IdeaService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Comment: asValue(Comment),
        Idea: asValue(Idea),
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
    });

module.exports = container;