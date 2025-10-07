// src/components/ArticleView.jsx
import React, { useEffect, useState } from 'react'

/**
 * ArticleView:
 * - types out `body` content with a typewriter animation
 * - when typing is complete, if imageSrc is provided, shows the image
 * - image onError hides the broken image gracefully
 */
export default function ArticleView({ title, body = '', imageSrc }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const typingSpeed = 16 // ms per character (tweakable)

  useEffect(() => {
    // reset on change
    setDisplayed('')
    setDone(false)
    setShowImage(false)

    if (!body || body.length === 0) {
      // if there's no body, mark done immediately and maybe show image
      setDone(true)
      if (imageSrc) setShowImage(true)
      return
    }

    let i = 0
    const id = setInterval(() => {
      i += 1
      setDisplayed(body.slice(0, i))
      if (i >= body.length) {
        clearInterval(id)
        setDone(true)
        // small delay before showing image so there's a natural pause
        if (imageSrc) setTimeout(() => setShowImage(true), 240)
      }
    }, typingSpeed)

    return () => clearInterval(id)
  }, [body, imageSrc])

  return (
    <div className="article-view">
      {title && <h3>{title}</h3>}
      <pre className="article-body" aria-live="polite">
        {displayed}
        {!done && <span className="type-ghost">▌</span>}
      </pre>

      {done && showImage && imageSrc && (
        <div className="article-image-wrap">
          <img
            src={imageSrc}
            alt={`${title || 'visual'} graphic`}
            className="article-image"
            onError={(e) => {
              // hide broken image
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
    </div>
  )
}
