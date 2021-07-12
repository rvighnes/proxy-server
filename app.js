const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors');
const morgan = require('morgan');



const TARGET_URL = 'http://localhost:8443';
const PROXY_PORT = 3210;



const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(createProxyMiddleware({ target: TARGET_URL, changeOrigin: true }));
app.listen(PROXY_PORT);
