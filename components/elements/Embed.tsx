'use client'

// interface EmbedProps {
//   html: string | TrustedHTML;
// }
// export default function Embed({ html }: EmbedProps) {
//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// }
import React, { useEffect } from 'react'

export default function Embed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <blockquote
      data-testid="tiktok-embed"
      className="tiktok-embed"
      cite="https://www.tiktok.com/@himanshusoni.in"
      data-unique-id="himanshusoni.in"
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
    >
      <section>
        <a target="_blank" href="https://www.tiktok.com/@himanshusoni.in?refer=creator_embed">
          @himanshusoni.in
        </a>
      </section>
    </blockquote>
  )
}
