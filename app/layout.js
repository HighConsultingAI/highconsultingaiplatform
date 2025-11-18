```jsx
// app/layout.js
import './globals.css'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'


export const metadata = {
title: process.env.NEXT_PUBLIC_APP_NAME || 'High Consulting AI',
description: 'AI automation platform',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<div className="app-root">
<Sidebar />
<div className="main-area">
<Topbar />
<div className="content-area">{children}</div>
</div>
</div>
</body>
</html>
)
}
```
