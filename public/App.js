import express from 'express';
import mongojs from 'mongojs';

let app = express();

app.use(express.static("public"))