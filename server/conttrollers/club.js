import Club from "../models/clubModel.js";

export const getClub = async (req, res) => {
  try {
    const club = await Club.find();
    res.status(200).json(club)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createClub = async (req, res) => {
  const club = req.body;
  const newClub = new Club(club);
  
  try {
    await newClub.save()
    res.status(201).json(newClub)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteClub = async (req, res) => {
  const clubID = req.body

  try {
    const club = await Club.deleteOne(clubID);
    res.status(201).json(club)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editClub = async (req, res) => {
  const editClub = req.body.club;
  const clubID = req.body.id;

  try {
    const club = await Club.updateOne({_id: clubID}, editClub);
    res.status(201).json(club)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 