import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'

function Footer() {

    const link = [
        { href: 'https://discord.com', icon: <FaDiscord /> },
        { href: 'https://twitter.com', icon: <FaTwitter /> },
        {
            href: 'https://github.com', icon: <FaGithub />
        },
        {
            href: 'https://instagram.com', icon: <FaInstagram />
        },
        {
            href: 'https://youtube.com', icon: <FaYoutube />

        },
        {
            href: 'https://twitch.com', icon: <FaTwitch />
        }

    ]



    return (
        <footer className='w-screen bg-violet-300 py-4 text-black'>
            <div className="container mx-auto flex flex-col item-center justify-between gap-4 px-4 md:flex-row">
                <p>
                    &copy; Nova All rights reserved
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {link.map((link) => (
                        <a href={link.href} key={link}
                            target='_blank'
                            rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer
