import * as Koa from 'koa';
import * as BodyParser from 'koa-bodyparser';
import routes from './routes/index';
import RethinkDB from './rethinkdb';
const app = new Koa();
RethinkDB.connect();
// sessions
app.keys = ['wescale'];
app.use(BodyParser());
app.use(routes.routes());
app.listen(8181);
console.log('Listening on port 8181.');
//# sourceMappingURL=index.js.map