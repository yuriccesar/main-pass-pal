import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Main PassPal`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-federation',
    options: {
      path: "./src/images/",
      ssr: false, // Remotes will be fetched during SSG (SSR)
      federationConfig: {
        // B. For your Host
        name: '`mainPassPal`',
        remotes: {
          passPal: 'passPal@http://localhost:8001/', // where the content of /public is served
        },

        shared: {}, // Your shared deps
      },
    },
    __key: "images"
  }]
};

export default config;
