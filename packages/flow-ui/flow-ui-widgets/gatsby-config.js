module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@widgets': '@elegantstack/flow-ui-widgets/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
