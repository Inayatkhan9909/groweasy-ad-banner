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
        width: '300px', // Fixed width
        height: '400px', // Fixed height
        padding: '20px',
        background: `url(${background}) no-repeat center/cover`,
        borderRadius: '8px',
        border: '2px solid #ccc',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space between elements
      }}
    >
      <EditIcon
        onClick={onEdit}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: 'white',
        }}
      />
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>{title}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <img src={image} alt={title} style={{ maxHeight: '150px', width: 'auto' }} />
        </Box>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>{description}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={onView}>{cta}</Button>
      </Box>
    </Box>
  );
};

export default BannerImageComp;
