const { Sequelize, DataTypes } = require('sequelize');

//DB1
const sequelizeDB1 = new Sequelize('DB1', 'juli_db1', 'contraseña_db1', {
  host: 'localhost',
  dialect: 'mysql'
});

const PersonaDB1 = sequelizeDB1.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  nombre: DataTypes.STRING,
  DNI: DataTypes.STRING,
  Fecha_de_nacimiento: DataTypes.DATE
}, {
  tableName: 'Personas',
  timestamps: false
});

//DB2
const sequelizeDB2 = new Sequelize('DB2', 'juli_db2', 'contraseña_db2', {
  host: 'localhost',
  dialect: 'mysql'
});

const PersonaDB2 = sequelizeDB2.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  nombre: DataTypes.STRING,
  DNI: DataTypes.STRING,
  Fecha_de_nacimiento: DataTypes.DATE,
  cuit: DataTypes.INTEGER
}, {
  tableName: 'Personas',
  timestamps: false
});


//DB User_Auth
const sequelizeUserAuth = new Sequelize('User_Auth', 'juli_user', 'contraseña_user', {
  host: 'localhost',
  dialect: 'mysql'
});

const usuario = sequelizeUserAuth.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario: {
    type: Sequelize.STRING,
    unique: true
  },
  contraseña: Sequelize.STRING
});

sequelizeUserAuth.authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos User_Auth');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos User_Auth:', err);
  });


module.exports = { sequelizeDB1, PersonaDB1, sequelizeDB2, PersonaDB2, sequelizeUserAuth, usuario };