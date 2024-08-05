"use client"
import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import html2canvas from 'html2canvas';
import { Banner } from '../types';

export interface BannerDetailProps {
  banner: Banner;
  onEdit: () => void;
}

export const BannerDetail: React.FC<BannerDetailProps> = ({ banner, onEdit }) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (bannerRef.current) {
      const downloadButton = document.getElementById('download-button');
      if (downloadButton) downloadButton.style.display = 'none';
      html2canvas(bannerRef.current).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'banner.png';
        link.click();
        if (downloadButton) downloadButton.style.display = 'block';
      });
    }
  };

  return (
    <Box className="m-0 w-screen h-screen py-20 bg-[url('/images/HomeBackground.jpeg')] flex items-center justify-center">
      <Box
        ref={bannerRef}
        sx={{
          position: 'relative',
          padding: '40px',
          width: '50%',
          maxWidth: '60%',
          background: `url(${banner.background}) no-repeat center/cover`,
          borderRadius: '16px',
          border: '2px solid #ccc',
          color: 'white',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <EditIcon
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            color: 'white',
            zIndex: 1,
          }}
          onClick={onEdit}
        />
        <Typography variant="h4" className="mb-6">{banner ? banner.title : "No banner found"}</Typography>
        {banner && (
          <img
            src={banner.image}
            alt={banner.title}
            style={{
              maxHeight: '400px',
              width: '100%',
              objectFit: 'contain',
              marginBottom: '20px',
              borderRadius: '8px'
            }}
          />
        )}
        {banner && <Typography variant="body1" sx={{ marginBottom: '20px' }}>{banner.description}</Typography>}
        <Box className="flex justify-center mt-4">
          <Button id="download-button" variant="contained" color="primary" onClick={handleDownload}>
            Download
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// export default BannerDetail;
