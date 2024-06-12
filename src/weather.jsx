import { useState } from "react";
import Search from "./search"
import Infobox from './infobox'
export default function Weather(){
    const [winfo,setwInfo]=useState({
        city:"CITY",
    Max_temp: "",
    Min_temp: "",
    description: "",
    feels_like: undefined,
    humidity:undefined,
    wind: undefined
    });
   let updateInfo=(result)=>{
   setwInfo(result);
   }
    return(
     <>
    <Search updateInfo={updateInfo}/>
    <Infobox info={winfo}/>
    </>
)}