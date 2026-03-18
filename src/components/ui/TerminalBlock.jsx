import { useEffect, useRef, useState } from 'react';

const LINES = [
  <span key={0}><span className="text-gray-500">{'// OrderDashboard.tsx — real-time logistics ops'}</span></span>,
  <span key={1}>
    <span className="text-blue-300">import</span>
    <span className="text-gray-300">{' { AgGridReact, ColDef } '}</span>
    <span className="text-blue-300">from</span>
    <span className="text-amber-400">{" 'ag-grid-react'"}</span>
  </span>,
  <span key={2}>
    <span className="text-blue-300">import</span>
    <span className="text-gray-300">{' { useRef, useEffect, useState } '}</span>
    <span className="text-blue-300">from</span>
    <span className="text-amber-400">{" 'react'"}</span>
  </span>,
  <span key={3} className="text-gray-700">&nbsp;</span>,
  <span key={4}>
    <span className="text-blue-300">interface</span>
    <span className="text-lime-400">{' Order '}</span>
    <span className="text-gray-300">{'{'}</span>
  </span>,
  <span key={5}>
    <span className="text-gray-300">{'  id: '}</span>
    <span className="text-blue-300">string</span>
    <span className="text-gray-300">{'; status: '}</span>
    <span className="text-blue-300">string</span>
    <span className="text-gray-300">{'; eta: '}</span>
    <span className="text-blue-300">Date</span>
  </span>,
  <span key={6}><span className="text-gray-300">{'}'}</span></span>,
  <span key={7} className="text-gray-700">&nbsp;</span>,
  <span key={8}>
    <span className="text-blue-300">const</span>
    <span className="text-lime-300">{' OrderDashboard'}</span>
    <span className="text-gray-300">{' = () => {'}</span>
  </span>,
  <span key={9}>
    <span className="text-blue-300">{'  const '}</span>
    <span className="text-gray-300">{'[orders, setOrders] = '}</span>
    <span className="text-lime-300">{'useState'}</span>
    <span className="text-gray-300">{'<Order[]>([])'}</span>
  </span>,
  <span key={10}>
    <span className="text-blue-300">{'  const '}</span>
    <span className="text-gray-300">{'worker = '}</span>
    <span className="text-lime-300">{'useRef'}</span>
    <span className="text-gray-300">{'<SharedWorker | null>(null)'}</span>
  </span>,
  <span key={11} className="text-gray-700">&nbsp;</span>,
  <span key={12}>
    <span className="text-lime-300">{'  useEffect'}</span>
    <span className="text-gray-300">{'(() => {'}</span>
  </span>,
  <span key={13}>
    <span className="text-gray-300">{'    worker.current = '}</span>
    <span className="text-blue-300">new</span>
    <span className="text-lime-300">{' SharedWorker'}</span>
    <span className="text-amber-400">{"('./ws-worker.js')"}</span>
  </span>,
  <span key={14}>
    <span className="text-gray-300">{'    worker.current.port.onmessage = ({ data }) => {'}</span>
  </span>,
  <span key={15}>
    <span className="text-lime-300">{'      setOrders'}</span>
    <span className="text-gray-300">{'(prev => [...prev, ...data.orders])'}</span>
  </span>,
  <span key={16}><span className="text-gray-300">{'    }'}</span></span>,
  <span key={17}><span className="text-gray-300">{'  }, [])'}</span></span>,
  <span key={18} className="text-gray-700">&nbsp;</span>,
  <span key={19}>
    <span className="text-blue-300">{'  return '}</span>
    <span className="text-gray-300">{'<'}</span>
    <span className="text-lime-300">{'AgGridReact'}</span>
    <span className="text-gray-300">{' rowData={orders} columnDefs={cols} />'}</span>
  </span>,
  <span key={20}><span className="text-gray-300">{'}'}</span></span>,
];

const TerminalBlock = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const timersRef = useRef([]);

  const startAnimation = () => {
    setVisibleCount(0);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    LINES.forEach((_, i) => {
      const t = setTimeout(() => setVisibleCount(i + 1), i * 140 + 400);
      timersRef.current.push(t);
    });

    const loopTimer = setTimeout(() => {
      startAnimation();
    }, LINES.length * 140 + 400 + 3500);
    timersRef.current.push(loopTimer);
  };

  useEffect(() => {
    startAnimation();
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-window w-full">
      {/* Chrome bar */}
      <div className="terminal-chrome">
        <span className="terminal-dot bg-red-500/80" />
        <span className="terminal-dot bg-yellow-500/80" />
        <span className="terminal-dot bg-lime-500/80" />
        <span className="ml-3 text-xs font-mono text-gray-500">bash — limeshot</span>
      </div>

      {/* Code area */}
      <div className="p-5 font-mono text-xs leading-6 min-h-[340px] overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lime-500">❯</span>
          <span className="text-gray-400">node dashboard.tsx</span>
        </div>
        {LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="leading-6">
            {line}
          </div>
        ))}
        {visibleCount < LINES.length && (
          <span className="inline-block w-2 h-4 bg-lime-500 animate-blink-cursor align-middle ml-0.5" />
        )}
      </div>
    </div>
  );
};

export default TerminalBlock;
