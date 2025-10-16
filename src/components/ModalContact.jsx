import React, { useState } from 'react'

export default function ModalContact({onClose}){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('https://portfolio-backend-kappa-nine.vercel.app/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          message: msg 
        })
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setName('')
        setEmail('')
        setMsg('')
        setTimeout(onClose, 1500)
      } else {
        const data = await response.json()
        setStatus(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h4>Contact</h4>
        <form onSubmit={submit}>
          <label>Name<input value={name} onChange={e=> setName(e.target.value)} required /></label>
          <label>Email<input type="email" value={email} onChange={e=> setEmail(e.target.value)} required /></label>
          <label>Message<textarea value={msg} onChange={e=> setMsg(e.target.value)} required /></label>
          {status && <p className="status-message">{status}</p>}
          <div className="modal-actions">
            <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  )
}
