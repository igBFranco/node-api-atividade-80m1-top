'use strict'

const express = require("express");
const cors = require("cors");
const config = require("./config");
//const db = require('./db');
const firebase = require('firebase');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(config.port, () => {
    console.log(`API rodando em ${config.url}`);
})


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

//definindo o tipo de banco de dados
const db = firebase.firestore();

const Plate = db.collection('plates');

app.get('/', async (req, res) => {
    const snapshot = await Plate.get();
    console.log(snapshot);
    //criando o objeto que ira receber o json com os documentos
    const plates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log(plates);
    res.send(plates);
})