const User = require('../models/user');

function registrationNew(req, res) {
  res.render('registration/new');
}

function registrationCreate(req, res){
  User
    .create(req.body)
    .then((user) => {
      res.redirect('/');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      res.status(500).end();
    });
}

module.exports = {
  new: registrationNew,
  create: registrationCreate
};