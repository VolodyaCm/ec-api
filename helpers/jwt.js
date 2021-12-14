import expressJWT from 'express-jwt';

export function authJWT() {
  return expressJWT({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256'],
    isRevoked: isRevoked
  }).unless({
    path: [
      { url: '/api/v1/products', methods: ['GET', 'OPTIONS'] },
      '/api/v1/users/login',
      '/api/v1/users/register',
    ]
  })
}

async function isRevoked(req, payload, done) {
  if(!payload?.isAdmin) {
    done(null, true);
  }

  done();
}
