const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const pino = require('koa-pino-logger')()

const app = new Koa()
app.use(bodyParser())
app.use(pino)

app.use(async ctx => {

	ctx.log.info('inserting todo item into database')
  const dbtitle = await ctx.request.body.Body
  const item = await show(dbtitle)

  ctx.log.info('generating SMS response message')
	const twiml = new MessagingResponse();
  twiml.message("Todo item inserted successfully!");
  ctx.res.writeHead(200, { 'Content-Type': 'text/xml' });
  ctx.res.end(twiml.toString());
})

async function show(title) {
  try {
    
    const itemData = await pool.query(`INSERT todoItems (todoItem, dateCreated) VALUES ('${title}', NOW());`)
    return itemData

  } catch (error) {
    return error
  }
}

module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");