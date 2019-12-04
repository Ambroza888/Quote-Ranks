const Author = require('./models')
module.exports = {

  index: function(req,res){
      Author.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: function(req,res){
    Author.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  findById: function(req,res){
    Author.findById({_id:req.params.id})
    .then(data => res.json(data)) 
    .catch(err => res.json(err))
  },
  update: function(req,res){
    Author.findOneAndUpdate({_id:req.params.id},{$push:{quotes:req.body}},{runValidators:true})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  delete: function(req,res){
    Author.findByIdAndRemove({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  },
  updateAuthor: function(req,res){
    Author.findOneAndUpdate({_id:req.params.id},req.body)
    .then(data=> res.json(data))
    .catch(err => res.json(err))
  },
  voteDown: function(req,res){
    Author.findOneAndUpdate({"_id":req.params.aID})
    .then(data=>{
      console.log(data)
      for (let quat of data.quotes){
        if (quat._id == req.params.cID){
          quat.votes = quat.votes - 1;
        }
      }
      data.save().res.json(data)
    })
    .catch(err => res.json(err))
  },
  voteUP: function(req,res){
    Author.findOneAndUpdate({"_id":req.params.aID})
    .then(data=>{
      for (let quat of data.quotes){
        if (quat._id == req.params.cID){
          quat.votes +=1;
        }
      }
      data.save().res.json(data)
    })
    .catch(err=> res.json(err))
  },
  deleteQ: function(req,res){
    Author.findByIdAndUpdate({_id:req.params.aID},{$pull:{quotes:{_id:req.params.qID}}})
    .then(data=> res.json(data))
    .catch(err => res.json(err))
  }

}  