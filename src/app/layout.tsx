import React from 'react'

export const metadata = {
  title: 'Blog - Next.js App Router'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{fontFamily:'system-ui, sans-serif', padding:20}}>
        <header style={{marginBottom:24}}>
          <h1>Blog LA 2028 - por Chrys Penalber</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
