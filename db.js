const Sequelize = require('sequelize');
const sq = new Sequelize("postgres://localhost/dealers_choice_spa")

const Pokemon = sq.define('pokemon', {
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})

const Type = sq.define('type', {
    name: {
        type: Sequelize.STRING(20),
        defaultValue: 'Bird',
        allowNull: false
    }
})

const Region = sq.define('region', {
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})

Pokemon.belongsTo(Type);
Type.hasMany(Pokemon);
Pokemon.belongsTo(Region);
Region.hasMany(Pokemon)

const dbSync = async() => {
    try {
        await sq.sync({ force: true });
        
        /*const [fire, water, grass] = await Promise.all(
            ['Fire', 'Water', 'Grass'].map(function(name) { Type.create({name}) })
        );*/
        const fire = await Type.create({name: 'Fire'});
        const water = await Type.create({name: 'Water'});
        const grass = await Type.create({name: 'Grass'});
        const johto = await Region.create({name: 'Johto'});
        const hoenn = await Region.create({name: 'Hoenn'});
        const sinnoh = await Region.create({name: 'Sinnoh'});

        await Pokemon.create({name: 'Cyndaquil', typeId: fire.id, regionId: johto.id});
        await Pokemon.create({name: 'Totodile', typeId: water.id, regionId: johto.id});
        await Pokemon.create({name: 'Chikorita', typeId: grass.id, regionId: johto.id});
    } catch(err) {
        console.log(err);
    }
};

dbSync();

module.exports = { Pokemon, Type };