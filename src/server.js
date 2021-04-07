import 'dotenv/config';

import path from "path";
import express from "express";
import osutil from "os-utils";
import cors from "cors";
// import allowCors from "./config/cors";

import bodyParser from 'body-parser';

import routes from './routes';


const app = express();



// osutil.cpuUsage(function(v) {
//     console.log('CPU Usage (%): ' + v);
// });



// Tratamento de Cors, liberação ou bloqueio de acessos externos
app.use(cors());
// app.use(allowCors);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(routes)


const PORT = process.env.PORT || 4000;
app.listen(PORT);