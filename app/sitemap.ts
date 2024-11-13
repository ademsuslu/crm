
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const URL = 'https://suslucrm.netlify.app/'
    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}