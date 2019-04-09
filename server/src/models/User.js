
const bcrypt = require('bcryptjs')

 function hashPassword (user, options) { // eslint-disable-line
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  /* return bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
    if (err) throw err
    user.setDataValue('password', hash) */
  user.setDataValue('password', bcrypt.hashSync(user.password, SALT_FACTOR))
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = user.password && user.password !== '' ? bcrypt.hashSync(user.password, 8) : ''
      }
    }
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }
  return User
}
