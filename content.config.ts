import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md"
      // source: {
      //   repository: process.env.GITHUB_REPOSITORY,
      //   include: process.env.CONTENT_INCLUDE,
      //   authToken: process.env.GITHUB_AUTH_TOKEN,
      // },
    }),
  },
});
