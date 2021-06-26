import * as React from "react"
import { Header } from '../Header/header'
import { Navigation } from "../Navigation/navigation"
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <main className={container}>
            <Header title={data.site.siteMetadata.title}/>
            <Navigation />
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout;
