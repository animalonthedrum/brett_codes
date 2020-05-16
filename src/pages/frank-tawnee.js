import React from "react"
import {motion} from "framer-motion"

//components
import Layout from '../components/layout';
import { PageHeader } from "../styles/pageStyles";

// import Img from "gatsby-image"



const Wedding = () => {

  return (
    <Layout>
    <motion.div>
    <PageHeader
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: '100%', opacity: 0 }}
        transition={{
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
        }}
    >
    Frank & Tawnee
    </PageHeader>
    </motion.div>
        
    </Layout>
  )
}

export default Wedding