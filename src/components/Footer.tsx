import React from 'react'

export function Footer() {
    return (
        <footer className="p-4 bg-gray-900 text-white text-center">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    )
}