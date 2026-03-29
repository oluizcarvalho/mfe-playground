import { useState, useEffect } from 'react';

const s = {
  widget: { background: 'linear-gradient(135deg, #0f1729 0%, #1a2744 100%)', border: '1px solid rgba(97,218,251,0.2)', borderRadius: '12px', padding: '24px', color: '#e4e6f0', fontFamily: "-apple-system, sans-serif" },
  header: { display: 'flex' as const, alignItems: 'center' as const, gap: '12px', marginBottom: '12px' },
  icon: { fontSize: '24px', color: '#61dafb' },
  title: { fontSize: '20px', fontWeight: 700, margin: 0 },
  desc: { color: '#8b8fa3', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 },
  grid: { display: 'grid' as const, gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '20px' },
  stat: { background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '16px', textAlign: 'center' as const },
  num: { display: 'block', fontSize: '28px', fontWeight: 800, color: '#61dafb' },
  lbl: { display: 'block', fontSize: '11px', color: '#8b8fa3', marginTop: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' },
  btn: { width: '100%', padding: '12px', border: 'none', borderRadius: '8px', background: '#0ea5e9', color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer' },
} as const;

export default function App() {
  const [count, setCount] = useState(0);
  const [renders, setRenders] = useState(0);

  useEffect(() => {
    setRenders((r) => r + 1);
    console.log('[remote-react] App mounted via Vite Federation');
  }, []);

  return (
    <div style={s.widget}>
      <div style={s.header}>
        <span style={s.icon}>⚛</span>
        <h3 style={s.title}>React Remote Widget</h3>
      </div>
      <p style={s.desc}>This component is served from <strong>remote-react</strong> (port 4202) via Vite Module Federation.</p>
      <div style={s.grid}>
        <div style={s.stat}><span style={s.num}>{count}</span><span style={s.lbl}>Counter</span></div>
        <div style={s.stat}><span style={{...s.num, color:'#38bdf8'}}>v19</span><span style={s.lbl}>React</span></div>
        <div style={s.stat}><span style={s.num}>{renders}</span><span style={s.lbl}>Renders</span></div>
      </div>
      <button style={s.btn} onClick={() => setCount((c) => c + 1)}>Increment Counter</button>
    </div>
  );
}

export function mount(container: HTMLElement): () => void {
  const { createRoot } = require('react-dom/client');
  const root = createRoot(container);
  root.render(<App />);
  return () => root.unmount();
}
