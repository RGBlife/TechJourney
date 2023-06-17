import React from 'react'

type Props = {
    name: string
}

export function Footer({ name }: Props) {
    return (
        <footer className="p-4 bg-gray-900 text-white text-center">
            <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </footer>
    )
}