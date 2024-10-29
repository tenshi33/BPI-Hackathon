const express = require('express');
const cors = require('cors');
const db = require('./config/db.js'); 
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/rest/chatbot', require('./controller/chatbot.controller.js'))
app.use('/v1/rest/users', require('./controller/userData.controller.js'))

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost"

db().then(() => {
    app.listen(PORT,HOST, () => {
        console.log(`Server running at http://${HOST}:${PORT}/`);
    });
});
