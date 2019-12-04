const controller = require('./controller')
const path = require('path')
module.exports = function(app){
  app.get('/api/author', controller.index)
  app.post('/api/author', controller.create)
  app.get('/api/author/:id', controller.findById)
  app.put('/api/author/:id', controller.update)
  app.delete('/api/author/:id', controller.delete)
  app.put('/api/author/author/:id', controller.updateAuthor)
  app.put('/api/voteUP/:aID/:cID',controller.voteUP)
  app.put('/api/voteDown/:aID/:cID',controller.voteDown)
  app.put('/api/deleteQ/:aID/:qID',controller.deleteQ)
  app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}