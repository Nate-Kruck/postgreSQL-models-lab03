const fs = require('fs');
const Retailer = require('./game_retailers');
const pool = require('../utils/pool');

describe('gameRetailer Class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should add game_retailers into the database', async() => {
    const company = await Retailer.insert({
      name: 'GameStop',
      url: 'https://www.gamestop.com/'
    });

    const { rows } = await pool.query('SELECT * FROM game_retailers WHERE id=$1', [company.id]);

    expect(rows[0]).toEqual({
      id: company.id,
      name: 'GameStop',
      url: 'https://www.gamestop.com/'
    });
  });
});
