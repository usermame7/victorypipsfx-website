export default function ChartBackground() {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
      {/* Multiple layered chart backgrounds for depth */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Enhanced gradients for realistic candles */}
            <linearGradient id="bullCandle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#00d975" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#00b862" stopOpacity="0.7"/>
            </linearGradient>
            <linearGradient id="bearCandle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff4757" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#ff3742" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#e83e33" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="trendLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00e0d6" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#39ff14" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.8"/>
            </linearGradient>
            
            {/* Grid pattern */}
            <pattern id="tradingGrid" x="0" y="0" width="80" height="60" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 60" fill="none" stroke="#1a3344" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
          </defs>
          
          {/* Trading grid background */}
          <rect width="100%" height="100%" fill="url(#tradingGrid)"/>
          
          {/* Price levels with labels */}
          <g stroke="#2a4a5a" strokeWidth="1" opacity="0.6" fontSize="10" fill="#4a6a7a">
            <line x1="0" y1="150" x2="1440" y2="150"/>
            <text x="10" y="145" className="text-xs">2050.00</text>
            <line x1="0" y1="250" x2="1440" y2="250"/>
            <text x="10" y="245" className="text-xs">2040.00</text>
            <line x1="0" y1="350" x2="1440" y2="350"/>
            <text x="10" y="345" className="text-xs">2030.00</text>
            <line x1="0" y1="450" x2="1440" y2="450"/>
            <text x="10" y="445" className="text-xs">2020.00</text>
            <line x1="0" y1="550" x2="1440" y2="550"/>
            <text x="10" y="545" className="text-xs">2010.00</text>
            <line x1="0" y1="650" x2="1440" y2="650"/>
            <text x="10" y="645" className="text-xs">2000.00</text>
            <line x1="0" y1="750" x2="1440" y2="750"/>
            <text x="10" y="745" className="text-xs">1990.00</text>
          </g>
        </svg>
      </div>

      {/* Main candlestick chart */}
      <div className="absolute inset-0 opacity-70">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Candlestick shadows (wicks) */}
          <g stroke="#3a5a6a" strokeWidth="1.5" opacity="0.8">
            {/* Green candle wicks */}
            <line x1="48" y1="480" x2="48" y2="720">
              <animate attributeName="y1" values="480;470;480" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="128" y1="460" x2="128" y2="740"/>
            <line x1="208" y1="500" x2="208" y2="740"/>
            <line x1="288" y1="470" x2="288" y2="740">
              <animate attributeName="y1" values="470;460;470" dur="6s" repeatCount="indefinite"/>
            </line>
            <line x1="368" y1="490" x2="368" y2="740"/>
            <line x1="448" y1="450" x2="448" y2="740"/>
            <line x1="528" y1="480" x2="528" y2="740"/>
            <line x1="608" y1="460" x2="608" y2="740">
              <animate attributeName="y1" values="460;450;460" dur="5s" repeatCount="indefinite"/>
            </line>
            <line x1="688" y1="490" x2="688" y2="740"/>
            <line x1="768" y1="440" x2="768" y2="740"/>
            <line x1="848" y1="470" x2="848" y2="740"/>
            <line x1="928" y1="480" x2="928" y2="740"/>
            <line x1="1008" y1="460" x2="1008" y2="740">
              <animate attributeName="y1" values="460;450;460" dur="5.5s" repeatCount="indefinite"/>
            </line>
            <line x1="1088" y1="490" x2="1088" y2="740"/>
            <line x1="1168" y1="470" x2="1168" y2="740"/>
            <line x1="1248" y1="480" x2="1248" y2="740"/>
            <line x1="1328" y1="460" x2="1328" y2="740"/>
            
            {/* Red candle wicks */}
            <line x1="88" y1="600" x2="88" y2="780"/>
            <line x1="248" y1="620" x2="248" y2="780"/>
            <line x1="408" y1="610" x2="408" y2="780"/>
            <line x1="568" y1="630" x2="568" y2="780"/>
            <line x1="728" y1="600" x2="728" y2="780"/>
            <line x1="888" y1="610" x2="888" y2="780"/>
            <line x1="1048" y1="620" x2="1048" y2="780"/>
            <line x1="1208" y1="610" x2="1208" y2="780"/>
          </g>
          
          {/* Candlestick bodies with realistic trading patterns */}
          <g>
            {/* Strong bullish candles - XAUUSD rally */}
            <rect x="40" y="520" width="16" height="180" fill="url(#bullCandle)" rx="1">
              <animate attributeName="height" values="180;200;180" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="y" values="520;510;520" dur="4s" repeatCount="indefinite"/>
            </rect>
            <rect x="120" y="480" width="16" height="220" fill="url(#bullCandle)" rx="1"/>
            <rect x="200" y="540" width="16" height="160" fill="url(#bullCandle)" rx="1"/>
            <rect x="280" y="500" width="16" height="190" fill="url(#bullCandle)" rx="1">
              <animate attributeName="height" values="190;210;190" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="500;490;500" dur="6s" repeatCount="indefinite"/>
            </rect>
            <rect x="360" y="530" width="16" height="170" fill="url(#bullCandle)" rx="1"/>
            <rect x="440" y="470" width="16" height="230" fill="url(#bullCandle)" rx="1"/>
            <rect x="520" y="510" width="16" height="190" fill="url(#bullCandle)" rx="1"/>
            <rect x="600" y="480" width="16" height="220" fill="url(#bullCandle)" rx="1">
              <animate attributeName="height" values="220;240;220" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="480;470;480" dur="5s" repeatCount="indefinite"/>
            </rect>
            <rect x="680" y="520" width="16" height="180" fill="url(#bullCandle)" rx="1"/>
            <rect x="760" y="460" width="16" height="240" fill="url(#bullCandle)" rx="1"/>
            <rect x="840" y="490" width="16" height="210" fill="url(#bullCandle)" rx="1"/>
            <rect x="920" y="510" width="16" height="190" fill="url(#bullCandle)" rx="1"/>
            <rect x="1000" y="480" width="16" height="220" fill="url(#bullCandle)" rx="1">
              <animate attributeName="height" values="220;240;220" dur="5.5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="480;470;480" dur="5.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="1080" y="520" width="16" height="180" fill="url(#bullCandle)" rx="1"/>
            <rect x="1160" y="490" width="16" height="210" fill="url(#bullCandle)" rx="1"/>
            <rect x="1240" y="500" width="16" height="200" fill="url(#bullCandle)" rx="1"/>
            <rect x="1320" y="480" width="16" height="220" fill="url(#bullCandle)" rx="1"/>
            
            {/* Bearish correction candles - smaller pullbacks */}
            <rect x="80" y="660" width="16" height="80" fill="url(#bearCandle)" rx="1"/>
            <rect x="240" y="680" width="16" height="60" fill="url(#bearCandle)" rx="1"/>
            <rect x="400" y="670" width="16" height="70" fill="url(#bearCandle)" rx="1">
              <animate attributeName="height" values="70;90;70" dur="3s" repeatCount="indefinite"/>
            </rect>
            <rect x="560" y="690" width="16" height="50" fill="url(#bearCandle)" rx="1"/>
            <rect x="720" y="660" width="16" height="80" fill="url(#bearCandle)" rx="1"/>
            <rect x="880" y="670" width="16" height="70" fill="url(#bearCandle)" rx="1"/>
            <rect x="1040" y="680" width="16" height="60" fill="url(#bearCandle)" rx="1"/>
            <rect x="1200" y="670" width="16" height="70" fill="url(#bearCandle)" rx="1"/>
          </g>
        </svg>
      </div>

      {/* Moving averages and trend lines */}
      <div className="absolute inset-0 opacity-60">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* EMA 20 (fast moving average) */}
          <path 
            d="M40 650 Q200 620 400 640 T800 590 Q1000 570 1200 580 T1400 560" 
            stroke="#39ff14" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          >
            <animate 
              attributeName="d" 
              values="M40 650 Q200 620 400 640 T800 590 Q1000 570 1200 580 T1400 560;M40 640 Q200 610 400 630 T800 580 Q1000 560 1200 570 T1400 550;M40 650 Q200 620 400 640 T800 590 Q1000 570 1200 580 T1400 560" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* EMA 50 (slower moving average) */}
          <path 
            d="M40 680 Q200 660 400 670 T800 630 Q1000 610 1200 620 T1400 600" 
            stroke="url(#trendLine)" 
            strokeWidth="2.5" 
            fill="none" 
            opacity="0.7"
          >
            <animate 
              attributeName="d" 
              values="M40 680 Q200 660 400 670 T800 630 Q1000 610 1200 620 T1400 600;M40 670 Q200 650 400 660 T800 620 Q1000 600 1200 610 T1400 590;M40 680 Q200 660 400 670 T800 630 Q1000 610 1200 620 T1400 600" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Support and resistance levels */}
          <g stroke="#ff6b6b" strokeWidth="1" strokeDasharray="5,5" opacity="0.4">
            <line x1="0" y1="750" x2="1440" y2="750"/>
            <text x="1350" y="745" fontSize="10" fill="#ff6b6b">Support 2000</text>
          </g>
          <g stroke="#00ff88" strokeWidth="1" strokeDasharray="5,5" opacity="0.4">
            <line x1="0" y1="450" x2="1440" y2="450"/>
            <text x="1350" y="445" fontSize="10" fill="#00ff88">Resistance 2025</text>
          </g>
        </svg>
      </div>

      {/* Volume bars at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 128">
          <g>
            {Array.from({length: 18}, (_, i) => (
              <rect 
                key={i}
                x={40 + i * 80} 
                y={128 - (30 + Math.random() * 60)} 
                width="12" 
                height={30 + Math.random() * 60}
                fill={Math.random() > 0.3 ? "#00ff88" : "#ff4757"}
                opacity="0.6"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
