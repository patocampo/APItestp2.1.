const express = require('express');
const { sequelizeDB1, PersonaDB1, sequelizeDB2, PersonaDB2 } = require('./database');
const basicAuth = require('express-basic-auth');
const { authenticateUser } = require('./auth');


const app = express();
app.use(express.json());

app.use(authenticateUser);


// Rutas DB1
app.get('/db1/personas', async (req, res) => {
  const personas = await PersonaDB1.findAll();
  res.json(personas);
});

app.post('/db1/personas', async (req, res) => {
  const nuevaPersona = await PersonaDB1.create(req.body);
  res.status(201).json(nuevaPersona);
});

app.get('/db1/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const persona = await PersonaDB1.findByPk(id_persona);
  if (persona) {
    res.json(persona);
  } else {
    res.status(404).json({ error: 'Persona no encontrada' });
  }
});

app.delete('/db1/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const persona = await PersonaDB1.findByPk(id_persona);
  if (persona) {
    await PersonaDB1.destroy({ where: { id_persona: id_persona } });
    res.json({ message: 'Persona eliminada exitosamente en DB1' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB1' });
  }
});


app.put('/db1/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const personaExistente = await PersonaDB1.findByPk(id_persona);
  if (personaExistente) {
    await PersonaDB1.update(req.body, { where: { id_persona: id_persona } });
    res.json({ message: 'Persona actualizada exitosamente en DB1' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB1' });
  }
});

app.patch('/db1/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const personaExistente = await PersonaDB1.findByPk(id_persona);
  if (personaExistente) {
    await PersonaDB1.update(req.body, { where: { id_persona: id_persona } });
    res.json({ message: 'Persona actualizada exitosamente en DB1' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB1' });
  }
});



// Rutas DB2
app.get('/db2/personas', async (req, res) => {
  const personas = await PersonaDB2.findAll();
  res.json(personas);
});

app.post('/db2/personas', async (req, res) => {
  const nuevaPersona = await PersonaDB2.create(req.body);
  res.status(201).json(nuevaPersona);
});


app.get('/db2/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const persona = await PersonaDB2.findByPk(id_persona);
  if (persona) {
    res.json(persona);
  } else {
    res.status(404).json({ error: 'Persona no encontrada' });
  }
});

app.delete('/db2/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const persona = await PersonaDB2.findByPk(id_persona);
  if (persona) {
    await PersonaDB2.destroy({ where: { id_persona: id_persona } });
    res.json({ message: 'Persona eliminada exitosamente en DB2' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB2' });
  }
});


app.put('/db2/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const personaExistente = await PersonaDB2.findByPk(id_persona);
  if (personaExistente) {
    await PersonaDB2.update(req.body, { where: { id_persona: id_persona } });
    res.json({ message: 'Persona actualizada exitosamente en DB2' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB2' });
  }
});

app.patch('/db2/personas/:id_persona', async (req, res) => {
  const id_persona = req.params.id_persona;
  const personaExistente = await PersonaDB2.findByPk(id_persona);
  if (personaExistente) {
    await PersonaDB2.update(req.body, { where: { id_persona: id_persona } });
    res.json({ message: 'Persona actualizada exitosamente en DB2' });
  } else {
    res.status(404).json({ error: 'Persona no encontrada en DB2' });
  }
});


app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));