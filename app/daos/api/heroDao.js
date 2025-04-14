const con = require('../../config/dbconfig')

const heroDao = {
    table: 'hero',
    ...require('../daoCommon'),
    findHeros: (res, table)=> {
        con.query
        `SELECT h.hero_id, h.hero_name, h.first_name,
        h.lastname, h.alias, franchise, s.species, 
        h.place_of_origin, h.first_app, h.aligment, h.img_url
        FROM hero h
        JOIN franchiser f USING (franchise_id)
        JOIN species a USING (speices_id);`,
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
    },


    findHeroById
}

findbytAlignment:(res, table, aligmnet)=> {
    con.query (
        `SELECT h.hero_id, h.hero_name, h.first_name,
        h.lastname, h.alias, franchise, s.species, 
        h.place_of_origin, h.first_app, h.aligment, h.img_url
        FROM hero h
        JOIN franchiser f USING (franchise_id)
        JOIN species a USING (speices_id);
        ORDER BY h.hero_name, h.last_name, h.first_name;`,
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

module.exports = heroDao