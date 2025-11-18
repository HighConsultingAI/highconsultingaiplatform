```jsx
// components/NodeTypes/SimpleNode.jsx
import React from 'react'


export default function SimpleNode({ data }) {
return (
<div style={{padding:12, borderRadius:8, background:'#0b0b0d', border:'1px solid rgba(255,255,255,0.03)'}}>
<div style={{fontWeight:600}}>{data.label}</div>
<div style={{fontSize:12, color:'#9aa0a6', marginTop:6}}>{data.desc}</div>
</div>
)
}
```
