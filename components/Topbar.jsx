// components/Topbar.jsx
'use client'

export default function Topbar() {
  return (
    <div className="topbar bg-white/5 p-4 flex items-center gap-4">
      <div className="flex-1 font-semibold">Workflows</div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 rounded bg-zinc-800 text-sm">Import</button>
        <button className="px-3 py-1 rounded bg-emerald-500 text-black text-sm">Execute</button>
        <div className="rounded-full bg-zinc-800 w-8 h-8 flex items-center justify-center">AK</div>
      </div>
    </div>
  )
}
