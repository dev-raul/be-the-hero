import express from "express";

//Controllers
import OngController from "./app/controllers/OngController";
//Validator
import { OngStore } from "./app/validators/Ong";

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngStore, OngController.store);

export default routes;
