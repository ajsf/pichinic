const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const productPage = path.resolve('./src/templates/product-page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.fields.slug,
            component: productPage,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type == 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: 'slug', value: slug })
  }
}
