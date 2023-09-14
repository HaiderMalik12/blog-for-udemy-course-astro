import rss, {pagesGlobToRssItems} from '@astrojs/rss'

export async function get(){
    return rss({
        title: 'My Blog',
        description: 'I teach people how to build websites',
        site: 'https://astro-blog-haidermalik12.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}