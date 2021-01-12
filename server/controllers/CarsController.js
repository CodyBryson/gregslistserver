import BaseController from "../utils/BaseController"
import { carsService } from "../services/CarsService"

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get("", this.getAll)
      .get("/:carId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await carsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
    res.send("getting all")
  }
  async getOne(req, res, next) {
    try {
      res.send(await carsService.getOne(req.params.carId))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await carsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await carsService.edit(req.param.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await carsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }







}