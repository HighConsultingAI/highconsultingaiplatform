// app/layout.js
import './globals.css'

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'High Consulting AI',
  description: 'AI automation platform',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="app-shell">
          <header className="topbar">
            <div className="brand">
              {process.env.NEXT_PUBLIC_APP_NAME || 'HCAI'}
            </div>
            <nav>
              <a href="/">Dashboard</a>
              <a href="/workflows">Workflows</a>
              <a href="/login">Login</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
