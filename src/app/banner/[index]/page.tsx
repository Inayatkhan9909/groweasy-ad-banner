 "use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BannerDetail from '../../components/BannerDetails';
import EditBannerTemplate from '../../components/EditBannerTemplateBs';
import adBanners from '../../data/adBanners.json';
import { Banner } from '../../types';

const BannerPage = () => {
  const params = useParams();
  const index = params.index;
  const [banner, setBanner] = useState<Banner | null>(null);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    if (index !== undefined) {
      setBanner(adBanners[Number(index)]);
    }
  }, [index]);

  const handleSave = (data: Banner) => {
    adBanners[Number(index)] = data;
    setBanner(data);
    setEdit(false);
  };

  return (
    <>
      {banner && (
        <>
          <BannerDetail banner={banner} onEdit={() => setEdit(true)} />
          {edit && (
            <EditBannerTemplate
              open={edit}
              handleClose={() => setEdit(false)}
              currentData={banner}
              onSave={handleSave}
            />
          )}
        </>
      )}
    </>
  );
};

export default BannerPage;
