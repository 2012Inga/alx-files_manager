const crypto = require('crypto');

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Already exists' });
      }

      const hashpwd = crypto.createHash('sha1').update(password).digest('hex');

      const newUser = await User.create({ email, password: hashpwd });
      res.status(201).json({ email: newUser.email, id: newUser._id });
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  }
}

module.exports = UsersController;
