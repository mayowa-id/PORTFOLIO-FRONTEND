import React, { useState } from 'react'


export default function ModalContact({onClose}){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [msg, setMsg] = useState('')


function submit(e){
e.preventDefault()
// placeholder: you'd post to /api/contact
console.log('contact', {name,email,msg})
onClose()
}


return (
<div className="modal-backdrop" role="dialog" aria-modal="true">
<div className="modal">
<h4>Contact</h4>
<form onSubmit={submit}>
<label>Name<input value={name} onChange={e=> setName(e.target.value)} /></label>
<label>Email<input value={email} onChange={e=> setEmail(e.target.value)} /></label>
<label>Message<textarea value={msg} onChange={e=> setMsg(e.target.value)} /></label>
<div className="modal-actions">
<button type="submit">Send</button>
<button type="button" onClick={onClose}>Close</button>
</div>
</form>
</div>
</div>
)
}