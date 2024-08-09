import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BoxAlbumAllfetch({ title }) {
  return (
    <Box sx={{ width: 300, height: 200, m: 2 }}>
      <Card variant="outlined"
      sx={{
        bgcolor: 'black',
        color: 'white',
        borderRadius: '10px'
         }} className='h-[100%] '>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: 'white' }} color="text.secondary" gutterBottom>
            Album Title
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
