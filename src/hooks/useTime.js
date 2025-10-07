import { useEffect, useState } from 'react'
export default function useTime(){
const [t, setT] = useState(()=> new Date().toLocaleTimeString())
useEffect(()=>{
const id = setInterval(()=> setT(new Date().toLocaleTimeString()), 1000)
return ()=> clearInterval(id)
},[])
return t
}