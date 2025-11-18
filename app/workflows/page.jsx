```jsx
// app/workflows/page.jsx
'use client'
import CanvasArea from '../../components/CanvasArea'


export default function WorkflowsPage() {
return (
<div className="p-4">
<div className="grid grid-cols-[1fr_320px] gap-4">
<div>
<CanvasArea />
</div>
<aside className="inspector">
<h3 className="text-sm font-semibold">Inspector</h3>
<p className="text-xs text-zinc-400 mt-2">Select a node on the canvas to see details.</p>
</aside>
</div>
</div>
)
}
```
