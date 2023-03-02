import Injury from "../models/injuryModel.js";

export const getInjury = async (req, res) => {
  try {
    const injury = await Injury.find();
    res.status(200).json(injury)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createInjury = async (req, res) => {
  const injury = req.body;
  const newInjury= new Injury(injury);
  
  try {
    await newInjury.save()
    res.status(201).json(newInjury)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteInjury = async (req, res) => {
  const injuryID = req.body

  try {
    const injury = await Injury.deleteOne(injuryID);
    res.status(201).json(injury)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editInjury = async (req, res) => {
  const editInjury = req.body.injury;
  const injuryID = req.body.id;

  try {
    const injury = await Injury.updateOne({_id: injuryID}, editInjury);
    res.status(201).json(injury)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 