import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


// ArticleType
// slugと、postsを受け取り、表示するポストのフィルタリングを実施する。
const themes =  [
  {
    value: 'iot',
    displayName: 'IOT関連',
  },
  {
    value: 'aws',
    displayName: 'AWS関連',
  },
];

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [articleType, setArticle_type] = useState('iot')
  const posts = data.allMarkdownRemark.nodes
  const [posts_, setPosts_] = useState(posts)
  const changeBlogList = (e) => {
    setArticle_type({ articleType: e.target.value});
    // alert(e.target.value);
    debugger;
    // これ以外にやり方あるらしい。tipをみる。
    setPosts_({ posts_: posts.filter(post => {post.fields.slug.includes(e.target.value)})})
    // post.fields.slug.includes(e.target.value)})の中身がないぞ？
    // alert(posts.filter(post => {post.fields.slug.includes(e.target.value)}));
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div class="sidenav">
       <p class="sidenav-p"> Menu </p> 
        <ul>
          <li class="nav-item active"><Link to="/">MAIN PAGE</Link></li>
          <li class="nav-item"><a href="#"><Link to="/contact/">ABOUT  ME</Link></a></li>
          {/* <li class="nav-item"><a href="#"><Link to="/contact/">code for Funabashiに関して</Link></a></li> */}
          {/* <li class="nav-item"><a href="#">NEWS</a></li>
          <li class="nav-item"><a href="#">TOPICS</a></li>
          <li class="nav-item"><a href="#">DOCS</a></li>
          <li class="nav-item"><a href="#">BLOG</a></li> */}
        </ul>
      </div>
      {/* これみて実装する・https://github.com/YPlan/react-pulldown/blob/master/src/components/pulldown-close.js */}
      <Bio />

      <select name="theme" onChange={changeBlogList}>
        {themes.map(theme =>{
          return (<option value={theme.value}>{theme.displayName}</option>)
        }
          )}
      </select>


      {/* <p>{ articleType }</p> */}
      <ol style={{ listStyle: `none` }}>
        {posts_.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
