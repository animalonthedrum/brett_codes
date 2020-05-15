/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import {normalize} from "styled-normalize"

//Components
import Header from "./header"
import CustomCursor from './customCursor'
import Navigation from "./navigation"

//Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"

const GlobalStyle = createGlobalStyle `
${normalize}
* {
  text-decoration:none;
  cursor:none;
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

  const { currentTheme, cursorStyles  } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })

  const [toggleMenu, setToggleMenu] = useState(false)

  const darkTheme = {
    background:"#000",
    text:"#fff",
    red:"#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    cursor:"#ccc"
  }
  const lightTheme = {
    background:"#fff",
    text:"#000",
    red:"#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    cursor:"#ccc"
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
    dispatch({type:'CURSOR_TYPE', cursorType: cursorType })
  }


  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <CustomCursor/>
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
        siteTitle={data.site.siteMetadata.title}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
        setHamburgerPosition={setHamburgerPosition}
      />
      <main>{children}</main>
        </ThemeProvider>
        {/* <footer>
          © {new Date().getFullYear()}
          <p>Brett Miller</p>
        </footer> */}

    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
