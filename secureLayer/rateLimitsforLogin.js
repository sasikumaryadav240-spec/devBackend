import rateLimit from "express-rate-limit";

const rateLimitForLogin = rateLimit({
    windowMs: 15 * 60 * 1000,
    max : 100
});

export default rateLimitForLogin;