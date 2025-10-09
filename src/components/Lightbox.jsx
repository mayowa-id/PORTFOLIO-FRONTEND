import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isLocked])
}

export default function Lightbox({ open, images = [], startIndex = 0, onClose = () => {} }) {
  const imgs = Array.isArray(images) ? images : [{ src: images, alt: '' }]
  const [index, setIndex] = React.useState(startIndex || 0)
  // zoomed toggles full-screen zoom
  const [zoomed, setZoomed] = React.useState(false)

  useEffect(() => {
    if (open) {
      setIndex(startIndex || 0)
      setZoomed(false) // reset zoom when reopened
    }
  }, [open, startIndex])

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') setIndex(i => Math.max(0, i - 1))
      else if (e.key === 'ArrowRight') setIndex(i => Math.min(imgs.length - 1, i + 1))
      else if (e.key === 'z' || e.key === 'Z') setZoomed(z => !z)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, imgs.length, onClose])

  if (!open) return null

  // portal root
  let portalRoot = document.getElementById('lightbox-root')
  if (!portalRoot) {
    portalRoot = document.createElement('div')
    portalRoot.id = 'lightbox-root'
    document.body.appendChild(portalRoot)
  }

  const img = imgs[index]

  return createPortal(
    <div
      className="lb-backdrop"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e)=>{
        // close only when clicking on backdrop, not inner content
        if(e.target.classList && e.target.classList.contains('lb-backdrop')) onClose()
      }}
    >
      <div
        className="lb-inner"
        onMouseDown={(e)=> e.stopPropagation()}
        style={ zoomed ? { maxWidth: 'none', maxHeight:'none', width:'auto', height:'auto', padding: 8 } : undefined }
      >
        <button className="lb-close" onClick={onClose} aria-label="Close image">✕</button>

        {imgs.length > 1 && (
          <button
            className="lb-nav lb-prev"
            onClick={() => { setZoomed(false); setIndex(i => Math.max(0, i - 1)) }}
            aria-label="Previous image"
            disabled={index === 0}
          >‹</button>
        )}

        <div className="lb-image-wrap" style={ zoomed ? { maxWidth:'calc(100vw - 40px)', maxHeight:'calc(100vh - 40px)' } : undefined }>
          <img
            src={img.src}
            alt={img.alt || `image ${index+1}`}
            className={`lb-image ${zoomed ? 'zoomed' : ''}`}
            role="zoomable"
            onDoubleClick={() => setZoomed(z => !z)}
            onClick={() => {
              // single click toggles zoom on desktop as well (optional)
              // comment out the following line if you prefer only double-click
              // setZoomed(z => !z)
            }}
            style={ zoomed ? { maxWidth:'none', maxHeight:'none', width: 'auto', height: 'auto' } : undefined }
          />
          {img.caption && <div className="lb-caption">{img.caption}</div>}
        </div>

        {imgs.length > 1 && (
          <button
            className="lb-nav lb-next"
            onClick={() => { setZoomed(false); setIndex(i => Math.min(imgs.length - 1, i + 1)) }}
            aria-label="Next image"
            disabled={index === imgs.length - 1}
          >›</button>
        )}
      </div>
    </div>,
    portalRoot
  )
}
