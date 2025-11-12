import Link from 'next/link';
export default function Home() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', background: '#000', color: '#fff', minHeight:'100vh', padding:40}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <img src="/logo.svg" alt="HCAI" style={{height:80}}/>
        <h1>HCAI — High Consulting AI</h1>
        <p>Welcome. Use the links below to sign in and manage workflows.</p>
        <p><Link href='/login'><a style={{color:'#fff'}}>Login</a></Link> • <Link href='/dashboard'><a style={{color:'#fff'}}>Dashboard</a></Link></p>
      </div>
    </div>
  )
}
