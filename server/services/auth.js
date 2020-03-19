const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// const namespace = 'http://localhost:3000/';
// MIDDLEWARE
exports.checkJWT = jwt({ 
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev-hp95u9at.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'YFnWnc4Y4OWyKkjBU6EikbkcIsIoQq4l',
  issuer: 'https://dev-hp95u9at.eu.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if (user && (user[process.env.NAMESPACE + '/role'] === role)) {
      next();
    } else {
      return res.status(401).send({title: 'Not Authorized', details: 'You are not authorized to access this data'})
    }
}