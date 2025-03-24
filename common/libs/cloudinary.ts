const BASE_URL = 'https://res.cloudinary.com/himanshusoni/image/upload'
export function getCloudinaryUrl(path: string) {
  const correctPath = path.startsWith('/') ? path.slice(1) : path
  return BASE_URL + '/' + correctPath
}