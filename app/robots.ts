import type { MetadataRoute } from 'next'

const URL = 'https://suslucrm.netlify.app/'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashboard/',
        },
        sitemap: URL + '/sitemap.xml',
    }
}