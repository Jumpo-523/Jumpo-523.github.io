const { graphql } = require("gatsby");






export const pageQuery = graphql`{
    allPdf {
      edges {
        node {
          content
        }
      }
    }
  }
`