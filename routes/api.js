const express = require('express');
//Was originally const app = ....
const router = express.Router();

const NoteItem = require('../models/noteItem');

router.get('/', (req, res) => {

  NoteItem.find({})
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  });
});

router.post('/save', (req, res) => {
  const data = req.body;

  const newNoteItem = new NoteItem(data);
  newNoteItem.save();
  res.json({
    msg: "We recieved your data"
  });
});

router.route("/:postId")
    .get((req, res) => {
        NoteItem.findById(req.params.postId)
        .then(post => res.json(post))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .delete((req, res) => {
        NoteItem.findByIdAndDelete(req.params.postId)
        .then(() => res.send("successfully deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get('/name', (req, res) => {
  const data = {
    username: "Hello",
    age: 5
  };
  res.json(data)
});

// router.delete('/delete/:id', (req, res, next) => {
//   NoteItem.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// });




module.exports = router;
