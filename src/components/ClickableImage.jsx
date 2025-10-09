import React from 'react'
import Lightbox from './Lightbox'

export function ClickableImage({ src, alt = '', className = '', caption, fit = 'cover' }) {
  const [open, setOpen] = React.useState(false)
  const openLightbox = () => setOpen(true)
  const closeLightbox = () => setOpen(false)

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`clickable-thumb ${className}`}
        style={{ objectFit: fit, cursor: 'zoom-in' }}
        onClick={openLightbox}
        loading="lazy"
      />
      <Lightbox
        open={open}
        images={[{ src, alt, caption }]}
        startIndex={0}
        onClose={closeLightbox}
      />
    </>
  )
}
 
export function GalleryImageGroup({ images = [], thumbClassName = '' }) {
  const [open, setOpen] = React.useState(false)
  const [start, setStart] = React.useState(0)

  function openAt(i) { setStart(i); setOpen(true) }
  return (
    <>
      <div className="gallery-thumbs">
        {images.map((it, i) => (
          <img
            key={i}
            src={it.src}
            alt={it.alt || `img-${i}`}
            className={`clickable-thumb ${thumbClassName}`}
            onClick={() => openAt(i)}
            loading="lazy"
          />
        ))}
      </div>

      <Lightbox open={open} images={images} startIndex={start} onClose={() => setOpen(false)} />
    </>
  )
}

