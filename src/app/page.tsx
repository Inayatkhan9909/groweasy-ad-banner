"use client"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplate from './components/EditBannerTemplateBs';
import adBanners from './data/adBanners.json';
import { Banner } from './types';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(adBanners);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleSave = (data: Banner) => {
    const updatedBanners = banners.map((banner, index) => index === editIndex ? data : banner);
    setBanners(updatedBanners);
    setEditIndex(null);
  };

  const handleView = (index: number) => {
    router.push(`/banner/${index}`);
  };

  return (

    <Box className=" m-0 w-screen bg-[url('/images/HomeBackground.jpeg')]">
      <Box sx={{ padding: '20px', display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {banners.map((banner, index) => (
          <BannerImageComp key={index} {...banner} onEdit={() => handleEdit(index)} onView={() => handleView(index)} />
        ))}
      </Box>
      {editIndex !== null && (
        <EditBannerTemplate
          open={editIndex !== null}
          handleClose={() => setEditIndex(null)}
          currentData={banners[editIndex]}
          onSave={handleSave}
        />
      )}
    </Box>

  );
};

export default Home;
