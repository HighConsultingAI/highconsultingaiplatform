// app/layout.jsx
import './globals.css'

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'High Consulting AI',
  description: 'AI automation platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          {children}
        </div>
      </body>
    </html>
  )
}
