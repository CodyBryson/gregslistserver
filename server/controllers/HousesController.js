import BaseController from "../utils/BaseController"
import { housesService } from "../services/HousesService"

export class HousesController extends BaseController {

  constructor() {
    super('api/houses')
    this.router
      .get("", this.getAll)
      .get("/:houseId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await housesService.getAll(req.query))
    } catch (error) {
      next(error)
    }
    res.send("getting all")
  }
  async getOne(req, res, next) {
    try {
      res.send(await housesService.getOne(req.params.houseId))
    } catch (error) {
      next(error)
    }
  }
  // REVIEW what do we use req.body on some and params on others. Is it because we are getting the entire object with req.body, and with req.params we are targeting just a specific property on the object?
  async create(req, res, next) {
    try {
      res.send(await housesService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await housesService.edit(req.param.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await housesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}