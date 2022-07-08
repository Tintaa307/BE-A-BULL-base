import RutinesModel from "../rutinesModel/rutinesModel"

// show all rutines

export const showAllRutines = async (req, res) => {
  try {
    const rutine = await RutinesModel.findAll()
    res.json({ message: "Success", data: rutine })
  } catch (error) {
    res.json({ message: error })
  }
}

// show one rutine

export const showOneRutine = async (req, res) => {
  try {
    await RutinesModel.findAll({
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Success" })
  } catch (error) {
    res.json({ message: error })
  }
}

// create rutine

export const createRutine = async (req, res) => {
  try {
    await RutinesModel.create(req.body)
    res.json({ message: "Success" })
  } catch (error) {
    res.json({ message: error })
  }
}

// update rutine

export const updateRutine = async (req, res) => {
  try {
    await RutinesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Success" })
  } catch (error) {
    res.json({ message: error })
  }
}

// delete rutine

export const deleteRutine = async (req, res) => {
  try {
    await RutinesModel.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Success" })
  } catch (error) {
    res.json({ message: error })
  }
}
