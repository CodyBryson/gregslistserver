import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class HousesService {
  async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }
  async getOne(houseId) {
    let houseFound = await dbContext.Houses.findById(houseId)
    if (!houseFound) {
      throw new BadRequest("No house exists with that Id")
    }
    return houseFound
  }
  async create(body) {
    return await dbContext.Houses.create(body)
  }
  async edit(id, body) {
    let updated = await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    if (!updated) {
      throw new BadRequest("No house exists with that Id")
    }
    return updated
  }
  async delete(id) {
    let house = await dbContext.Houses.findByIdAndDelete(id)
    if (!house) {
      throw new BadRequest("No house exists with that Id")
    }
    return "Successfully deleted"
  }

}

export const housesService = new HousesService()