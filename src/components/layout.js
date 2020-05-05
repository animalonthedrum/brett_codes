/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import {normalize} from "styled-normalize"

import Header from "./header"
import { useGlobalStateContext } from "../context/globalContext"

const GlobalStyle = createGlobalStyle `
${normalize}
* {
  text-decoration:none;
}

html {
  box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
  font-size:16px;
}
body {
  background:${props=>props.theme.background};
  overscroll-behavior:none;
  overflow-x:hidden;
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background:"#000",
    text:"#fff",
    red:"#ea291e"
  }
  const lightTheme = {
    background:"#fff",
    text:"#000",
    red:"#ea291e"
  }

  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <Header/>
        <main>{children}</main>
        </ThemeProvider>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}

    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
