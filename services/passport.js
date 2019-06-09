const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accesToken, refreshToken, profile, done) => {
            User.findOne({ profileId: profile.id }).then(existingUser => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User({
                        profileId: profile.id,
                        name: profile.name.givenName
                    })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
