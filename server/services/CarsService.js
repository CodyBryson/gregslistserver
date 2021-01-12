import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class CarsService {
  async edit(id, body) {

    let updated = await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
    if (!updated) {
      throw new BadRequest("No car exists with that Id")
    }
    return updated
  }

  async delete(id) {
    let car = await dbContext.Cars.findByIdAndDelete(id)
    if (!car) {
      throw new BadRequest("No car exists with that Id")
    }
    return "successfully deleted"
  }
  async getOne(carId) {

    let carFound = await dbContext.Cars.findById(carId)
    if (!carFound) {
      throw new BadRequest("No car exists with that Id")
    }
    return carFound
  }
  async getAll(query = {}) {
    return await dbContext.Cars.find(query)
  }
  async create(body) {
    return await dbContext.Cars.create(body)
  }
}
export const carsService = new CarsService()