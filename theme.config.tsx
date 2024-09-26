import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image"
import Logo from "./res/logo.png"

const config: DocsThemeConfig = {
  logo: <Image src={Logo} alt='NixLabs Logo' width={35}/>,
  project: {
    link: 'https://github.com/NixLabs-Dev',
  },
  chat: {
    link: 'https://discord.com',
  },
  footer: {
    text: 'NixLabs Developer Docs',
  },
}

export default config
