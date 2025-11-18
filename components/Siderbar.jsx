```jsx
// components/Sidebar.jsx
'use client'
import Link from 'next/link'


export default function Sidebar() {
return (
<aside className="sidebar">
<div className="brand">
<div className="logo">H</div>
<div>
<div className="font-semibold">High Consulting AI</div>
<div className="text-xs text-zinc-500">Automation</div>
</div>
</div>


<div className="mt-3">
<button className="w-full py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-sm mb-2">Create</button>
</div>


<nav className="mt-4">
<Link href="/workflows"><a>Workflows</a></Link>
<Link href="/executions"><a>Executions</a></Link>
<Link href="/credentials"><a>Credentials</a></Link>
</nav>


<div style={{marginTop:'auto', fontSize:12, color:'var(--muted)'}}>v0.1.0</div>
</aside>
)
}
```
