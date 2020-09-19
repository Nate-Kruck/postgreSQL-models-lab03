const pool = require('../utils/pool');

class Retailer {
    name;
    url;

    constructor(retailer) {
      this.id = retailer.id;
      this.name = retailer.name;
      this.url = retailer.url;
    }

    static async insert(game_retailers) {
      const { rows } = await pool.query(
        'INSERT INTO game_retailers (name, url) VALUES ($1, $2) RETURNING *',
        [game_retailers.name, game_retailers.url]
      );

      return new Retailer(rows[0]);
    }
}

module.exports = Retailer;
