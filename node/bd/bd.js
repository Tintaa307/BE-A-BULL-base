import { Sequelize } from "sequelize"

const bd = new Sequelize("gymbd", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

export default bd
