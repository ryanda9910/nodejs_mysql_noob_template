const Sequelize = require('sequelize')
//init Instance Sequelize
const sequelize = new Sequelize({
  database:'nodemysql',
  username:'root',
  password:'',
  dialect:'mysql',
})

module.exports={
  sequelize
}