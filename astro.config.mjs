// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import awsAmplify from "astro-aws-amplify";

import tailwindcss from "@tailwindcss/vite";

import { products } from "./src/data/products.ts";

const site = "https://www.emanuelebartolesi.com";

// Conditionally use AWS Amplify adapter for deployments
const isAWSDeployment = process.env.NODE_ENV === 'production' || process.env.AWS_AMPLIFY === 'true';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    mdx(),
    // Product pages render on request, so the sitemap cannot discover them.
    sitemap({ customPages: products.map((product) => `${site}/products/${product.slug}`) }),
  ],
  ...(isAWSDeployment && { adapter: awsAmplify() }),
  output: isAWSDeployment ? "server" : "static",

  vite: {
    plugins: [tailwindcss()],
  },
});