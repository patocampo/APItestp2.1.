const { sequelizeUserAuth } = require('./database');

async function authenticateUser(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Credenciales requeridas' });
  }

  const base64Credentials = authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  try {
    const query = `SELECT * FROM usuarios WHERE email = ? AND contraseña = ?`;
    const values = [username, password];
    const [rows, _] = await sequelizeUserAuth.query(query, { replacements: values });

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    next();
  } catch (error) {
    console.error('Error al verificar las credenciales:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { authenticateUser };
