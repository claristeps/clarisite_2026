export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("styles");
}

export const config = {
  dir: {
    input: "views",
    data: "content",
  },
};
