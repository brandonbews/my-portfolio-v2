module.exports = {
  siteMetadata: {
    title: `Brandon Bews`,
    description: `My name is Brandon Bews. I'm a designer and front end developer. Welcome to my handbuilt home on the web.`,
    author: `@brandonbews`,
    image: `/images/featured-image.png`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-pieces`,
        path: `${__dirname}/src/portfolio-pieces`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              quality: 60,
              withWebp: true,
              showCaptions: ['title'],
              backgroundColor: '#494E5A',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Bews`,
        short_name: `Bews`,
        start_url: `/`,
        background_color: `#1E2025`,
        theme_color: `#1E2025`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        toFormat: 'WEBP',
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
}
