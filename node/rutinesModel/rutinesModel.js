import bd from "../.bd/bd.js"
import { DataTypes } from "sequelize/types"

const RutinesModel = bd.define("Rutines", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
})

export default RutinesModel
