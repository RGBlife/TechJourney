import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type Data = {
    site: {
        siteMetadata: {
            fullName: string
        }
    }
}

export function Footer() {
    const data = useStaticQuery<Data>(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          fullName
        }
      }
    }
    `)

    return (
        <footer className="p-4 bg-gray-900 text-white text-center">
            <p>© {new Date().getFullYear()} {data.site.siteMetadata.fullName}. All rights reserved.</p>
        </footer>
    )
}