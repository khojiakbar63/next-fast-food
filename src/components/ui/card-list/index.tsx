import { ImageList, Box } from '@mui/material';
import {Card} from '@/components'; 
import './style.css'

export default function TitlebarBelowImageList({className}: {className?: string}) {
  return (
    <div className={`${className ? className : ''} flex items-center justify-center pb-[24px]`}>

    <Box sx={{ width: '500px', overflowX: 'auto', whiteSpace: 'wrap', display: 'flex', flexWrap: 'wrap' }}>
      <ImageList sx={{ display: 'grid', overflowX: 'auto' , gridTemplateRows: 'repeat(2, 1fr)', gap: 40, height: 586, paddingTop:'40px', paddingBottom: '32px'}}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Card key={index}  />
        ))}
      </ImageList>
    </Box>
    </div>
  );
}