import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import cors from 'koa-cors';
import convert from 'koa-convert';
import configs from './configs';

import mongoose from 'mongoose';

const app = new koa();
const router = new koaRouter();

const db = mongoose.createConnection(['mongodb://', configs.mongodb.ip, '/', configs.mongodb.dbname].join(''));

if (db) {
    console.log('mongodb connected successfully');
    global.db = db;
} else {
    console.log('mongodb connected failed');
}

import schemasRouters from './routers/schemaRouters';

const schemas = schemasRouters().default;

router.post('/hello', koaBody(), graphqlKoa({ schema: schemas.HelloSchema }));
router.get('/hello', graphqlKoa({ schema: schemas.HelloSchema }));
router.get('/Ihello', graphiqlKoa({ endpointURL: '/hello' }));

app.use(convert(cors(configs.cors)));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(configs.port, () => {
    console.log('app started successfully, listening on port ' + configs.port);
});