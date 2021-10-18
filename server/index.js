const express = require('express'); 
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
// Из express создаем сам сервер
const app = express();
const PORT = config.get('serverPort');
const cors = require('./middleware/cors.middleware');

app.use(cors);
app.use(express.json());
app.use("/api/auth",authRouter);

// функция, которая подключается к базе данных и запускает сервер
const start = async () => {
    try {
    await mongoose.connect(config.get("dbUrl"));

    app.listen(PORT, () =>{
        console.log("Server started on port", PORT);
    });

    }catch(err) {

    }
}

start();