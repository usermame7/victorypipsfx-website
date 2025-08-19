export default function ChartBackground() {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
      <svg 
        className="absolute inset-0 w-full h-full opacity-60" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18f07f" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#08c966" stopOpacity="0.4"/>
          </linearGradient>
          <linearGradient id="gRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ff3b3b" stopOpacity="0.4"/>
          </linearGradient>
          <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00e0d6" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        <g stroke="#153044" strokeWidth="0.5" opacity="0.4">
          <path d="M0 800 H1440 M0 720 H1440 M0 640 H1440 M0 560 H1440 M0 480 H1440 M0 400 H1440 M0 320 H1440 M0 240 H1440 M0 160 H1440 M0 80 H1440"/>
          <path d="M0 0 V900 M120 0 V900 M240 0 V900 M360 0 V900 M480 0 V900 M600 0 V900 M720 0 V900 M840 0 V900 M960 0 V900 M1080 0 V900 M1200 0 V900 M1320 0 V900 M1440 0 V900"/>
        </g>
        
        {/* Animated Candlestick Bodies */}
        <g stroke="none">
          {/* Green candles */}
          <rect x="40" y="620" width="16" height="120" fill="url(#gGreen)" opacity="0.9" rx="2">
            <animate attributeName="height" values="120;140;120" dur="4s" repeatCount="indefinite"/>
          </rect>
          <rect x="160" y="580" width="16" height="160" fill="url(#gGreen)" opacity="0.9" rx="2">
            <animate attributeName="height" values="160;180;160" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="280" y="640" width="16" height="100" fill="url(#gGreen)" opacity="0.9" rx="2"/>
          <rect x="520" y="600" width="16" height="140" fill="url(#gGreen)" opacity="0.9" rx="2"/>
          <rect x="760" y="560" width="16" height="180" fill="url(#gGreen)" opacity="0.9" rx="2"/>
          <rect x="1000" y="620" width="16" height="120" fill="url(#gGreen)" opacity="0.9" rx="2"/>
          <rect x="1240" y="600" width="16" height="140" fill="url(#gGreen)" opacity="0.9" rx="2"/>
          
          {/* Red candles */}
          <rect x="80" y="680" width="16" height="80" fill="url(#gRed)" opacity="0.8" rx="2"/>
          <rect x="200" y="660" width="16" height="100" fill="url(#gRed)" opacity="0.8" rx="2"/>
          <rect x="320" y="700" width="16" height="60" fill="url(#gRed)" opacity="0.8" rx="2">
            <animate attributeName="height" values="60;80;60" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="440" y="680" width="16" height="80" fill="url(#gRed)" opacity="0.8" rx="2"/>
          <rect x="680" y="640" width="16" height="120" fill="url(#gRed)" opacity="0.8" rx="2"/>
          <rect x="920" y="700" width="16" height="60" fill="url(#gRed)" opacity="0.8" rx="2"/>
          <rect x="1160" y="680" width="16" height="80" fill="url(#gRed)" opacity="0.8" rx="2"/>
        </g>
        
        {/* Animated Trend Line */}
        <g stroke="url(#gBlue)" strokeWidth="3" fill="none" opacity="0.7">
          <path d="M40 700 Q200 650 400 680 T800 620 Q1000 600 1200 640">
            <animate 
              attributeName="d" 
              values="M40 700 Q200 650 400 680 T800 620 Q1000 600 1200 640;M40 690 Q200 640 400 670 T800 610 Q1000 590 1200 630;M40 700 Q200 650 400 680 T800 620 Q1000 600 1200 640" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
