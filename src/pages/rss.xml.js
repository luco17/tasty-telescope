import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "FASwim Training",
    description: "Swim better with us",
    site: "https://amazing-rabanadas-7b0b3f.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx?$")),
    customData: `<language>en-uk</language>`,
  });
}

// Regex that matches .md or .mdx files
const mdRegex = /\.mdx?$/;
