import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

const TIME_ZONE = "UTC-03";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addFilter("fmtDate", (dateObj, fmt = "yyyy-LL-dd HH:mm") => {
    if (!dateObj) return "";
    // Convert to desired zone
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setZone("America/Argentina/Buenos_Aires")
      .toFormat(fmt);
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "Clarifeed",
      subtitle: "The feed for all things Clari.",
      base: "https://claribel.ink/",
      author: {
        name: "Clara F. Millgress",
        email: "",
      },
    },
  });
}

export const config = {
  dir: {
    input: "views",
  },
};
