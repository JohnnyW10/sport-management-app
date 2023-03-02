import Magazine from "../models/magazineModel.js";

export const getMagazine = async (req, res) => {
  try {
    const magazine = await Magazine.find();
    res.status(200).json(magazine)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createMagazine = async (req, res) => {
  const magazine = req.body;
  const newMagazine = new Magazine(magazine);
  
  try {
    await newMagazine.save()
    res.status(201).json(newMagazine)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteMagazine = async (req, res) => {
  const magazineID = req.body

  try {
    const magazine = await Magazine.deleteOne(magazineID);
    res.status(201).json(magazine)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editMagazine = async (req, res) => {
  const editMagazine = req.body.magazine;
  const magazineID = req.body.id;

  try {
    const magazine = await Magazine.updateOne({_id: magazineID}, editMagazine);
    res.status(201).json(magazine)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 