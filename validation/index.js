const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { struct } = require('superstruct');

const app = new Koa()
app.use(bodyParser())

const User = struct({
  id: 'number',
  name: 'string',
	address: 'string?' //address is optional
})

app.use(async ctx => {

	const data = await ctx.request.body
  
	const item = await show(data)
  
  ctx.body = item
})

async function show(data) {
  try {
		const user = User(data)
		//console.log(user)
		const result = {message: "Valid Data!", user}
		return(result)
		// return ("Valid data!")
	} catch (e) {
		const { message } = e
		return({ message })
	}

}

module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");