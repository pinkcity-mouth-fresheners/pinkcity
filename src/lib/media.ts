// lib/media.ts

const MEDIA_BASE_URL = 'https://media.pinkcitymouthfresheners.com'

export function mediaUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${MEDIA_BASE_URL}${cleanPath}`
}