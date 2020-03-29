const Model = require('../../../base/model')

const User = new Model()

User.table = "users"

User.keys = [
    "id",
    "name",
    "email",
    "password",
    "created_at",
    "updated_at",
    "deleted_at"
]

User.fillables = [
    "name",
    "email",
    "password"
]

module.exports = User;