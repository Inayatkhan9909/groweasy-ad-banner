import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { Banner } from '../types';

interface CreateBannerProps {
  open: boolean;
  handleClose: () => void;
  onSave: (data: Banner) => void;
}

const CreateBanner: React.FC<CreateBannerProps> = ({ open, handleClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cta, setCta] = useState('');
  const [image, setImage] = useState('');
  const [background, setBackground] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackground(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = () => {
    onSave({ title, description, cta, image, background });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4 
      }}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
        <TextField label="CTA" value={cta} onChange={(e) => setCta(e.target.value)} fullWidth margin="normal" />
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Background
          <input type="file" hidden onChange={handleBackgroundChange} />
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>Create</Button>
      </Box>
    </Modal>
  );
};

export default CreateBanner;
