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

Pokemon.belongsTo(Type);
Type.hasMany(Pokemon);

const dbSync = async() => {
    try {
        await sq.sync({ force: true });
        
        await Type.create({name: 'Fire'});
        await Type.create({name: 'Water'});
        await Type.create({name: 'Grass'});

        await Pokemon.create({name: 'Cyndaquil', typeId: 1});
        await Pokemon.create({name: 'Totodile', typeId: 2});
        await Pokemon.create({name: 'Chikorita', typeId: 3});
    } catch(err) {
        console.log(err);
    }
};

dbSync();

module.exports = { Pokemon, Type };