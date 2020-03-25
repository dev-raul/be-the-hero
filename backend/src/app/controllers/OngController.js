import Db from "../../database";
import crypto from "crypto";

class OngController {
  async index(req, res) {
    const ongs = await Db("ongs").select("*");
    return res.json(ongs);
  }
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    await Db("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return res.status(201).json({ id });
  }
}

export default new OngController();
