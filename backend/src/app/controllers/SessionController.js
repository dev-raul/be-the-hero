import Db from "../../database";

class SessionController {
  async store(req, res) {
    const { id } = req.body;
    const ong = await Db("ongs")
      .where("id", id)
      .select("name")
      .first();
    if (!ong) {
      return res.status(401).json({ error: "Ong not found!" });
    }

    return res.json(ong);
  }
}

export default new SessionController();
