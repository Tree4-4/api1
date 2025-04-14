const con = require('../../config/dbconfig')

const franchiseDao = {
    table: 'franchise',
    ...require('../daoCommon'),
    findHerosByFranchise: (res, table, franchise)=> {
        con.query (
            `SELECT h.hero_id, h.hero_name, h.first_name,
        h.lastname, h.alias, franchise, s.species, 
        h.place_of_origin, h.first_app, h.aligment, h.img_url
        FROM hero h
        JOIN franchiser f USING (franchise_id)
        JOIN species a USING (speices_id);
        WHERE f.franchise = '${franchise}
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

module.exports = franchiseDao