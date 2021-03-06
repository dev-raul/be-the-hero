import Db from "../../database";

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const incidents = await Db("incidents")
      .where("ong_id", ong_id)
      .select("*");
    return res.json(incidents);
  }
}

export default new ProfileController();
