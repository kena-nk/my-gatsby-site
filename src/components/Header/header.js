import * as React from "react"
import {
    siteTitle
  } from './header.module.css'

export const Header = ({ title }) => {
    return (
        <p className={siteTitle}>{title}</p>
    )
}
