import Schedule from "../models/scheduleModel.js";

export const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    console.log(schedule)
    res.status(200).json(schedule)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createSchedule = async (req, res) => {
  const schedule = req.body;
  const newSchedule = new Schedule(schedule);
  
  try {
    await newSchedule.save()
    res.status(201).json(newSchedule)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteSchedule = async (req, res) => {
  const scheduleID = req.body

  try {
    const schedule = await Schedule.deleteOne(scheduleID);
    res.status(201).json(schedule)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const editSchedule = async (req, res) => {
  const editSchedule = req.body.schedule;
  const scheduleID = req.body.id;

  try {
    const schedule = await Schedule.updateOne({_id: scheduleID}, editSchedule);
    res.status(201).json(schedule)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
} 