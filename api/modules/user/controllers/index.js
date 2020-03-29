const User = require("../model/index")

exports.index = (req, res, next) => {

    let users = User.all()
    // setTimeout(()=> {
    //     console.log(users)
    // }, 2000)

    res.status(200).json({
        message: "Hello"
    })

}






















exports.store = (req, res, next) => {
    res.status(200).json({
        message: "Created new user"
    })
}

exports.update = (req, res, next) => {
    res.status(200).json({
        message: "Updated user"
    })
}

exports.single = (req, res, next) => {
    res.status(200).json({
        message: "Showing user"
    })
}

exports.delete = (req, res, next) => {
    res.status(200).json({
        message: "Deleted user"
    })
}

exports.restore = (req, res, next) => {
    res.status(200).json({
        message: "Restore deleted user"
    })
}