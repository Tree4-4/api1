const con = require('../../config/dbconfig')

const powerDao = {
    table: 'power',
    ...require('../daoCommon'),
    findHerosByFranchise: (res, table, power)=> {
        con.query (
            `SELECT h.hero_id, h.hero_name, h.first_name,
        h.lastname, h.alias, franchise, s.species, 
        h.place_of_origin, h.first_app, h.aligment, h.img_url
        FROM hero h
        JOIN franchiser f USING (franchise_id)
        JOIN species a USING (speices_id)
        JOIN hero_to_team ht ON h.hero_id = hp.hero_id
        Join power p ON ht.power_id = t.power_id
        WHERE p.power = '${power}'
        ORDER BY h.hero_id;`,
        (error, rows) => {
            if (!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(`DAO ERROR: ${table}" `, error)
                }
            }
        )
    }
}

module.exports = powerDao