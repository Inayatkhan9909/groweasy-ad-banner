import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Banner } from '../types';

interface BannerDetailProps {
  banner: Banner;
  onEdit: () => void;
}

const BannerDetail: React.FC<BannerDetailProps> = ({ banner, onEdit }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">{banner.title}</Typography>
      <img src={banner.image} alt={banner.title} style={{ maxHeight: '300px', width: '100%', margin: '20px 0' }} />
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>{banner.description}</Typography>
      <Button variant="contained" color="primary" onClick={onEdit}>Edit</Button>
    </Box>
  );
};

export default BannerDetail;
