const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const yup = require('yup');

const app = new Koa()
app.use(bodyParser())

const User = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
	address: yup.string() //address is optional
})

app.use(async ctx => {

	const myData = await ctx.request.body

	const result = await validate(myData)
  ctx.body = result; 

  
})

async function validate(data) {
  try {
		const user = User.validateSync(data)
		const result = {"message": "Valid Data!", user}
		return(result)

	} catch (e) {
		const { name, errors } = e
		return({ "message": name, errors })
	}
};

module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");