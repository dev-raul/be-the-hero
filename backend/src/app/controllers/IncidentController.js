import Db from "../../database";

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await Db("incidents").count();
    const incidents = await Db("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Counter", count["count(*)"]);
    return res.json(incidents);
  }
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    const [id] = await Db("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    return res.send({ id });
  }

  async destroy(req, res) {
    const id = parseInt(req.params.id);
    const ong_id = req.headers.authorization;

    const incident = await Db("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "You not permission!" });
    }

    await Db("incidents")
      .where("id", id)
      .delete();
    return res.status(204).json();
  }
}

export default new IncidentController();
