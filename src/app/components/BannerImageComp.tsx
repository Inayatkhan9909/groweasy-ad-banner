import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Banner } from '../types';

interface BannerProps extends Banner {
  onEdit: () => void;
  onView: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit, onView }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: '20px',
        background: `url(${background}) no-repeat center/cover`,
        borderRadius: '8px',
        border: '2px solid #ccc',
        color: 'white'
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 2 }}>
        <img src={image} alt={title} style={{ maxHeight: '150px', maxWidth: '100%' }} />
      </Box>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>{description}</Typography>
      <Button variant="contained" color="primary" onClick={onView}>{cta}</Button>
      <EditIcon onClick={onEdit} sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
    </Box>
  );
};

export default BannerImageComp;
