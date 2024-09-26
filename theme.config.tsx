import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image"

const config: DocsThemeConfig = {
  logo: <img src="/logo.png" width={30}/>,
  project: {
    link: 'https://github.com/NixLabs-Dev',
  },
  chat: {
    link: 'https://discord.gg/phEf3q2fFF',
  },
  footer: {
    text: (
      <span>
        Made with ❤️ by people, just like you
        <br />
        {new Date().getFullYear()} ©{" "}
        <a href="https://nixlabs.dev" target="_blank">
          NixLabs Networks
        </a>
      </span>
    ),
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: (
    <>
      <link rel="icon" href="/logo.png" sizes="any" />
    </>
  )
}

export default config
