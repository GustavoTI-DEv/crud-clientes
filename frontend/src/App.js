import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const response = await axios.get('/api/clients'); // Your API endpoint here
    setClients(response.data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName('');
    setEmail('');
    setCurrentId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currentId) {
      await axios.put(`/api/clients/${currentId}`, { name, email });
    } else {
      await axios.post('/api/clients', { name, email });
    }
    handleClose();
    fetchClients();
  };

  const handleEdit = (client) => {
    setCurrentId(client.id);
    setName(client.name);
    setEmail(client.email);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/clients/${id}`);
    fetchClients();
  };

  return (
    <Container>
      <h1>Client Management</h1>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Client</Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(client)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(client.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentId ? 'Edit Client' : 'Add Client'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter client details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {currentId ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;