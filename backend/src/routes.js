import express from "express";

//Controllers
import OngController from "./app/controllers/OngController";
import IncidentController from "./app/controllers/IncidentController";
import ProfileController from "./app/controllers/ProfileController";
//Validator
import { OngStore } from "./app/validators/Ong";
import { IncidentStore } from "./app/validators/Incident";

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngStore, OngController.store);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentStore, IncidentController.store);
routes.delete("/incidents/:id", IncidentController.destroy);

routes.get("/profile", ProfileController.index);

export default routes;
