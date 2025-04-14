const con = require('../../config/dbconfig')

const speciesDao = {
    table: 'species',
    ...require('../daoCommon'),
    findHerosBySpecies: (res, table, species)=> {
        con.query (
            `SELECT h.hero_id, h.hero_name, h.first_name,
        h.lastname, h.alias, franchise, s.species, 
        h.place_of_origin, h.first_app, h.aligment, h.img_url
        FROM hero h
        JOIN franchiser f USING (franchise_id)
        JOIN species a USING (speices_id)
        JOIN hero_to_team ht ON h.hero_id = ht.hero_id
        Join species s ON ht.team_id = s.species_id
        WHERE t.team = '${species}'
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


module.exports = speciesDao