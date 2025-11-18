```jsx
// components/Topbar.jsx
'use client'


export default function Topbar() {
return (
<div className="topbar">
<div style={{flex:1, fontWeight:600}}>Workflows</div>
<div style={{display:'flex', gap:8, alignItems:'center'}}>
<button className="px-3 py-1 rounded bg-zinc-800">Import</button>
<button className="px-3 py-1 rounded bg-emerald-500 text-black">Execute</button>
<div className="rounded-full bg-zinc-800 w-8 h-8 flex items-center justify-center">AK</div>
</div>
</div>
)
}
```
