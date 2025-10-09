import React from 'react'
import ArticleView from './ArticleView'
import { ClickableImage, GalleryImageGroup } from './ClickableImage'


export default function ProjectSection({
  title = '',
  description = '',
  image = null,
  images = null,
  github = null,
  className = ''
}) {
  // Normalize gallery images: prefer `images` array, else single `image`
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

      {github && (
        <div style={{ marginTop: 12 }}>
          <a className="github-link" href={github} target="_blank" rel="noopener noreferrer">
            View on GitHub ↗
          </a>
        </div>
      )}
    </div>
  )
}
