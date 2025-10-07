// src/components/FrameCarousel.jsx
import React, { useState, useRef, useEffect } from 'react'

/**
 * FrameCarousel
 * - frames: array of objects (title, body, image, date, tech, etc)
 * - renderFrame: optional function(frame, idx) => ReactNode
 * - initial: optional starting index
 */
export default function FrameCarousel({ frames = [], renderFrame, initial = 0 }) {
  const [idx, setIdx] = useState(initial || 0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [idx])

  if (!frames || frames.length === 0) {
    return <div className="frame-empty">No items to display</div>
  }

  const active = frames[idx]

  function prev() { setIdx(i => Math.max(0, i - 1)) }
  function next() { setIdx(i => Math.min(frames.length - 1, i + 1)) }

  return (
    <div className="frame-carousel" role="region" aria-label="frame carousel">
      <div className="frame-header">
        <div className="frame-title">{active.title || `Item ${idx + 1}`}</div>
        <div className="frame-controls">
          <button className="frame-btn" onClick={prev} disabled={idx === 0}>Prev</button>
          <span className="frame-counter">{idx + 1} / {frames.length}</span>
          <button className="frame-btn" onClick={next} disabled={idx === frames.length - 1}>Next</button>
        </div>
      </div>

      <div className="frame-body" ref={contentRef} tabIndex={0} aria-live="polite">
        {renderFrame ? renderFrame(active, idx) : (
          <div>
            {active.date && <div className="frame-meta">{active.date}</div>}
            {active.tech && <div className="frame-tech">{(active.tech || []).join(', ')}</div>}
            <div className="frame-text">{active.description || active.body || active.excerpt}</div>
            {active.image && (
              <div className="frame-image-wrap">
                <img src={active.image} alt={active.title} className="frame-image" onError={(e)=> e.currentTarget.style.display='none'} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
