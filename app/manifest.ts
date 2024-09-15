import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Himanshu Soni - Software Engineer',
    short_name: 'Himanshu Soni',
    description: 'Personal website, portfolio, blog, software engineer roadmap, programming tips of Himanshu Soni',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
