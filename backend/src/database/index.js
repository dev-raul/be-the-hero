import knex from "knex";
import config from "../../knexfile";

const connect = knex(config.development);

export default connect;
