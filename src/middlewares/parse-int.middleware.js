module.exports = (req, res, next) => {
    const queryString = req.query;

    for (const key in queryString) {
        const length = queryString[key].length;
        const isValid = (length >= 20) ? false : !isNaN(parseInt(queryString[key]));
        if (isValid) {
            queryString[key] = parseInt(queryString[key]);
        }
    }
    req.query = queryString;
    next();
}