const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')
const pino = require('koa-pino-logger')()

const app = new Koa()
app.use(bodyParser())
app.use(pino)

app.use(async ctx => {

	ctx.log.info('getting search word from request')
	todoItem = ctx.request.query;

	ctx.log.info('retrieving todo items from database')
  const item = await show(todoItem)

  ctx.log.info('generating response message')
	ctx.body = item

})

async function show() {

	let myQuery = "SELECT todoItem FROM todoItems "

  try {

		// if there is a search word, search on todoItem table all items with the title in the description
    if (todoItem.title){
			myQuery = myQuery + "WHERE todoItem LIKE '%" + todoItem.title + "%'"
		} 
		
    const itemData = await pool.query(myQuery)

		// if there are no matches found, throw an error
		if (itemData.length == 0) {
			throw "No items that match search criteria.";
		} else {
			return itemData
		}
   

  } catch (error) {
    
		return error
  }
}

module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");