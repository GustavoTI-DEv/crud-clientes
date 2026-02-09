const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// CRUD Operations
// Create
app.post('/api/client', (req, res) => {
    const clientData = req.body;
    const query = 'INSERT INTO clients SET ?';
    db.query(query, clientData, (err, result) => {
        if (err) throw err;
        res.status(201).json({ id: result.insertId, ...clientData });
    });
});

// Read
app.get('/api/client/:id', (req, res) => {
    const query = 'SELECT * FROM clients WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// Update
app.put('/api/client/:id', (req, res) => {
    const updateData = req.body;
    const query = 'UPDATE clients SET ? WHERE id = ?';
    db.query(query, [updateData, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ updated: result.affectedRows });
    });
});

// Delete
app.delete('/api/client/:id', (req, res) => {
    const query = 'DELETE FROM clients WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ deleted: result.affectedRows });
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
