import React, { useState } from "react"
import { Link } from "gatsby"
//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavImages,
  CloseNav,
} from "../styles/navigationStyles"
// import { FooterContent, FooterSocial } from "../styles/footerStyles"
//Icons
// import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"
//Framer Motion
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "IRONMAN",
    path: "/ironman",
    image: "Ironman/IM_home.jpg",
  },
  {
    id: 1,
    title: "SportsEngine",
    path: "/sportsengine",
    image: "SE/SE_home.jpg",
  },
  {
    id: 2,
    title: "Becca Neely",
    path: "/becca-neely",
    image: "BN/BN_home.jpg",
  },
  {
    id: 3,
    title: "PGAJr League",
    path: "/pgajr",
    image: "PgaJr/PgaJr_home.jpg",
  },
  {
    id: 4,
    title: "Hitch Adventures",
    path: "/hitch-adventure",
    image: "Hitch/Hitch_home.jpg",
  },
  {
    id: 5,
    title: "Frank & Tawnee",
    path: "/frank-tawnee",
    image: "F&T/F&T_home.jpg",
  }
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealImage, setRevealImage] = useState({
    show: false,
    image: "Ironman/IM_home.jpg",
    key: "0",
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay:.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <motion.ul 
                  variants={container}
                  initial="hidden"
                  animate="show">
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      variants={item}
                      // animate={{y:toggleMenu ? -50 : 0}}
                      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      onHoverStart={() =>
                        setRevealImage({
                          show: true,
                          image: route.image,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealImage({
                          show: false,
                          image: route.image,
                          key: route.id,
                        })
                      }
                    >
                      <Link to={`/${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </NavList>
              {/* <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>902.315.1279</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Facebook />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter> */}
              <NavImages>
                <motion.div
                  animate={{ width: revealImage.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <motion.div className="image">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.img
                      key={revealImage.key}
                      src={require(`../assets/images/${revealImage.image}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                    ></motion.img>
                  </AnimatePresence>
                </motion.div>
              </NavImages>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation