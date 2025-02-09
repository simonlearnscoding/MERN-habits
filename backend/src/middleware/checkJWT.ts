// middleware to check the Auth0 JWT (using express-jwt or similar)
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = () => {
  console.log("hi quick check");
  return jwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: ` https://dev-yq424yyo7e514hs3.auth0.com/.well-known/jwks.json
`,
    }),
    issuer: "https://dev-yq424yyo7e514hs3.auth0.com/",
    algorithms: ["RS256"],
  });
};
