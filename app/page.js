// app/page.js (Dashboard)
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="card" style={{marginTop:16}}>
        <h3>Quick Actions</h3>
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <Link href="/workflows"><button className="btn">Create Workflow</button></Link>
          <Link href="/login"><button className="btn" style={{background:'#6b21a8'}}>Sign in</button></Link>
        </div>
      </div>

      <section style={{marginTop:24}}>
        <div className="card">
          <h3>Connected Integrations</h3>
          <p style={{color:'var(--muted)'}}>No integrations connected yet</p>
        </div>
      </section>
    </div>
  )
}
