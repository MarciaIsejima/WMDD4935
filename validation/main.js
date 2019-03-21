const micro = require('micro')


const server = micro(async (req, res) => {

  return 'Hello world'
})

server.listen(3000)