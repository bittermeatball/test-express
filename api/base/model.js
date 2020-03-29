var db = require("../../database/connection")

module.exports = function Model() {
    this.table = ""
    this.keys = []
    this.fillables = []
    this.all = async () => {
        const data = await db.query(`SELECT * FROM ${this.table}`)
        console.log(data)
        // setTimeout(()=> {
        //     return data;
        // }, 1000)
    }
}
