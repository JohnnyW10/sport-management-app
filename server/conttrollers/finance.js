import Finance from "../models/financeModel.js";

export const getFinance = async (req, res) => {
  try {
    const finance = await Finance.find();
    res.status(200).json(finance)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createFinance  = async (req, res) => {
  const finance = req.body;
  const newFinance = new Finance(finance);
  
  try {
    await newFinance.save()
    res.status(201).json(newFinance)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteFinance = async (req, res) => {
  const financeID = req.body

  try {
    const finance = await Finance.deleteOne(financeID);
    res.status(201).json(finance)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editFinance = async (req, res) => {
  const editFinance = req.body.finance;
  const financeID = req.body.id;

  try {
    const finance = await Finance.updateOne({_id: financeID}, editFinance);
    res.status(201).json(finance)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 