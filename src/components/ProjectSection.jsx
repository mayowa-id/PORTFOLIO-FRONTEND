import React from 'react'
import ArticleView from './ArticleView'
import { ClickableImage, GalleryImageGroup } from './ClickableImage'

export default function ProjectSection({
  title = '',
  description = '',
  image = null,
  images = null,
  github = null,
  liveDemo = null,
  className = ''
}) {
  const gallery = Array.isArray(images) && images.length > 0
    ? images
    : (image ? [{ src: image, alt: title, caption: title }] : [])
  
  return (
    <div className={`project-section ${className}`} style={{ padding: 6 }}>
      <h2 style={{ marginTop: 0, marginBottom: 8 }}>{title}</h2>
      {description ? (
        <ArticleView title="" body={description} />
      ) : null}
      {gallery.length > 0 && (
        <div className="frame-image-wrap" style={{ marginTop: 12 }}>
          {gallery.length === 1 ? (
            <ClickableImage
              src={gallery[0].src}
              alt={gallery[0].alt || title}
              caption={gallery[0].caption || title}
              className="frame-image"
              fit="contain"
            />
          ) : (
            <GalleryImageGroup images={gallery} thumbClassName="frame-image" />
          )}
        </div>
      )}
      
      {/* Links section */}
{/* Links section */}
{(liveDemo || github) && (
  <div 
    style={{ 
      marginTop: 16, 
      display: 'flex', 
      gap: 16, 
      flexWrap: 'wrap' 
    }}
  >
    {liveDemo && (
      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          border: '1px solid #4ea1f3',
          fontWeight: 500,
          fontSize: '14px',
          display: 'inline-block',
          transition: 'background 0.25s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#4ea1f322'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        🌐 Live Demo
      </a>
    )}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          border: '1px solid #4ea1f3',
          fontWeight: 500,
          fontSize: '14px',
          display: 'inline-block',
          transition: 'background 0.25s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#4ea1f322'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        → GitHub
      </a>
    )}
  </div>
)}


