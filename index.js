const express = require("express");
const mongoose = require("mongoose");
const CookieSession = require("cookie-session");
const passport = require("passport");

require("./models/user");
require("./services/passport");

const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
    CookieSession({
        maxAge: 15 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
