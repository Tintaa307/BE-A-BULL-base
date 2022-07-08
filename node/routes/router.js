import express from "express"

import {
  showAllRutines,
  showOneRutine,
  createRutine,
  updateRutine,
  deleteRutine,
} from "../controller/userController"

const router = express.Router()

router.get("/", showAllRutines)
router.get("/:id", showOneRutine)
router.post("/", createRutine)
router.put("/:id", updateRutine)
router.delete("/:id", deleteRutine)

export default router
