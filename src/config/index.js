if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const { PORT, MONGO_URI, APPLICATION_NAME, JWT_SECRET, EXPIRES_IN, CACHE_KEY } = process.env;

module.exports = {
    PORT,
    MONGO_URI,
    APPLICATION_NAME,
    JWT_SECRET,
    EXPIRES_IN,
    CACHE_KEY
}