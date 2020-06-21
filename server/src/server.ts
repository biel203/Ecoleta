import express from 'express'
import routes from './routes'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

console.log("#################################")
console.log(process.env)
console.log("#################################")
const app = express();

app.use(routes)

app.listen(3333);