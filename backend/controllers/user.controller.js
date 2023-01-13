const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const Role = require("../models/role.model");

const signUp = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find({ name: { $in: req.body.roles } }, (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = roles.map((role) => role._id);
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.status(201).send({ message: "User Registered" });
        });
      });
    }
  });
};

module.exports = { signUp };
