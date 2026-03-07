import NavBar from '../components/NavBar';


export default function Events() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>

      <NavBar />
      <div style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 className="page-h1" style={{ fontSize: 40, fontWeight: '700', marginBottom: 48 }}>Events</h1>
        <p style={{ fontSize: 18, color: '#888', letterSpacing: '0.05em' }}>No upcoming events at this time.</p>
      </div>
    </div>
  );
}
