import express from "express";
import { use } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();

use(new GoogleStrategy());

app.get("/", (req, res) => {
    res.send({ hello: "world" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
