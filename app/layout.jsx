import './globals.css'

export const metadata = {
  title: 'High Consulting AI Platform',
  description: 'Workflow automation platform for modern businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
