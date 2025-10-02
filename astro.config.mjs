// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import awsAmplify from "astro-aws-amplify";

// Conditionally use AWS Amplify adapter for deployments
const isAWSDeployment = process.env.NODE_ENV === 'production' || process.env.AWS_AMPLIFY === 'true';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
...(isAWSDeployment && { adapter: awsAmplify() }),
  output: isAWSDeployment ? "server" : "static",
});
