import { getCloudinaryUrl } from '../libs/cloudinary'

export const PLACEHOLDER_URL = getCloudinaryUrl('/placeholder')
export const BACKDROP_IMAGE = getCloudinaryUrl('/backdrop')
export const PROFILE_URL = getCloudinaryUrl('/profile')
export const RESUME_URL = getCloudinaryUrl('/resume')

export const DEVTO_PROFILE = 'https://dev.to/himanshua790'
export const DEVTO_BLOG_API = 'https://dev.to/api/articles?username=himanshua790'

export const PAGESPEED_URL = 'https://pagespeed.web.dev/'
export const PAGESPEED_CATEGORIES = '&category=accessibility&category=performance&category=best-practices&category=seo'

export const SAWERIA_URL = 'https://saweria.co/himanshua790'
export const CODEWARS_URL = 'https://www.codewars.com/'
export const CMS_SERVICE = process.env.CMS_SERVICE || ''
