const BASE_URL = 'https://res.cloudinary.com/himanshusoni/image/upload'
export function getCloudinaryUrl(path: string) {
  return BASE_URL + path
}
