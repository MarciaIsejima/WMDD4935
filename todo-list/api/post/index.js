const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../dbconfig2.js')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const dbtitle = await ctx.request.body.title

  const item = await show(dbtitle)
  console.log(item)
  ctx.body = item
})

async function show(title) {
    try {
    
        const itemData = await pool.query(`SELECT movieTitle FROM movieList`)
    
        return itemData[0].movieTitle
      } catch (error) {
        console.log(error)
      }
}

//module.exports = app.callback()
app.listen(3000);
console.log("Listening on port 3000...");