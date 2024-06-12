import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './info.css';
export default function Infobox({info}){
    const INIT_img="https://media.wired.com/photos/65e860922a01e579ac0d29f2/16:9/w_1920,h_1080,c_limit/london-heatwave.jpg";
    const HOT_img="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_img="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const OVERCAST_img="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_img="https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=170667a&w=0&k=20&c=IroMBxRXyfm4K6sLvLaBBV3Wj6Bzv1kKJtDisEo5Jhg=";
    return <div className="info">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_img:
            info.feels_like>18?HOT_img:COLD_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span" >
          <p>humidity={info.humidity}</p>
          <p>Maximum temprature={info.Max_temp}℃</p>
          <p>Minimum temprature={info.Min_temp}℃</p>
          <p>wind={info.wind}m/s</p>
          <p>The Weather can be Described as {info.description} Feels Like {info.feels_like
          }℃</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
}