const con = require('../../config/dbconfig') 

const heroDao = {
    table: 'hero',
    ...require('../../daos/api/daoCommon'),
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


    findHeroById: (res, table, id)=> {
        con.query(
            `SELECT h.hero_id, h.hero_name, h.first_name,
            h.last_name, h.alias, f.franchise, s.species, 
            h.place_of_origin, h.first_app, h.alignment, h.img_url
            FROM hero h 
            JOIN franchise f USING (franchise_id)
            JOIN species s USING (species_id)
            WHERE h.hero_id = ${id};`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR: ${table}`, error)
                }
            }
        )
    },
    
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
}

    
    findHeroPowers: (res, table, id)=> {
        con.query (
        `SELECT ${table}.hero_id, p.power FROM
        ${table}
        JOIN hero_to_power hp ON ${table}.hero_id = hp.hero_id
        JOIN power p ON p.power_id = hp.power_id
        Where ${table}.hero_id = ${id};`,
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