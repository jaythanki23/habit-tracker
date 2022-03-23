import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

const port = 5000;

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
