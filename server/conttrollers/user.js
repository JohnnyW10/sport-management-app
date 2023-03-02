import UserAccount from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const userAccount = await UserAccount.find();
    res.status(200).json(userAccount)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserAccount(user);
  
  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteUser = async (req, res) => {
  const userID = req.body

  try {
    const user = await UserAccount.deleteOne(userID);
    res.status(201).json(user)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editUser = async (req, res) => {
  const editUser = req.body.user;
  const userID = req.body.id;

  try {
    const user = await UserAccount.updateOne({_id: userID}, editUser);
    res.status(201).json(user)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 