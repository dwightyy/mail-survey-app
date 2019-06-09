const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accesToken, refreshToken, profile, done) => {
            console.log("acces", accesToken);
            console.log("refresh", refreshToken);
            console.log("profile", profile);
        }
    )
);
