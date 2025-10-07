import React from 'react'
import useTime from '../hooks/useTime'


export default function StatusBar(){
const time = useTime()
return (
<footer className="statusbar">
<div>By Mayowa Idowu</div>
<div>{time}</div>
<div>:help for commands</div>
</footer>
)
}