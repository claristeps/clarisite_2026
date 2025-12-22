import { DateTime } from "luxon";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addDateParsing(function (dateValue) {
    if (typeof dateValue === "string") {
      return DateTime.fromISO(dateValue, {
        zone: "America/Argentina/Buenos_Aires",
      });
    }
  });
}

export const config = {
  dir: {
    input: "views",
  },
};
