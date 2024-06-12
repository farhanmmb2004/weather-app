import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './search.css';
import Button from '@mui/material/Button';
export default function search({updateInfo}){
    let[city,setCity]=useState("");
    // let[error,setError]=useState(fasle);
    const URL="https://api.openweathermap.org/data/2.5/weather?";
    const API="0bf1dee6701ac52c4de2757703592a57";
    let change=(event)=>{
    setCity(event.target.value)

    }
    let weather=async()=>{
      // try{
        let data=await fetch(`${URL}q=${city}&appid=${API}&units=metric`);
        let jdata=await data.json();
        console.log(jdata);
        let result={
        city:city,
        feels_like:jdata.main.feels_like,
        Max_temp:jdata.main.temp_max,
        Min_temp:jdata.main.temp_min,
        description:jdata.weather[0].description,
        wind:jdata.wind.speed,
        humidity:jdata.main.humidity,
        };
        return result;
      // }
      // catch(err){
      //   throw err;
      // }
    }
    let clicked=async (event)=>{
    // try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let result=await weather();
    updateInfo(result);
    // }
    // catch(err){
    //   setError(true);
    // }
    }
    return (<div className='search'>
        <form>
        <h2 className='h2'>Enter city name for Weather details</h2>
<TextField value={city} onChange={change} id="outlined-basic" label="Outlined" variant="outlined"/>
<br />
<Button variant="contained" type='submit' onClick={clicked}>
        Send
      </Button>
        </form>
        {/* {error && <p > city Not found</p>} */}
    </div>
)
}