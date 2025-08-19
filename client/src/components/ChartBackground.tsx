export default function ChartBackground() {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
      {/* Professional Trading Platform Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 opacity-30"></div>
      
      {/* Main Trading Chart Interface */}
      <div className="absolute inset-0 opacity-25">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1600 1000" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Professional Gradients */}
            <linearGradient id="bullishCandle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ff7f" stopOpacity="0.95"/>
              <stop offset="30%" stopColor="#32cd32" stopOpacity="0.9"/>
              <stop offset="70%" stopColor="#228b22" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#006400" stopOpacity="0.8"/>
            </linearGradient>
            <linearGradient id="bearishCandle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.85"/>
              <stop offset="50%" stopColor="#e74c3c" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#c0392b" stopOpacity="0.75"/>
            </linearGradient>
            <linearGradient id="maLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#40e0d0" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#00ced1" stopOpacity="0.8"/>
            </linearGradient>
            
            {/* Advanced Grid Pattern */}
            <pattern id="professionalGrid" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#1e3a8a" strokeWidth="0.3" opacity="0.4"/>
              <path d="M 30 0 L 30 40" fill="none" stroke="#1e3a8a" strokeWidth="0.1" opacity="0.3"/>
              <path d="M 0 20 L 60 20" fill="none" stroke="#1e3a8a" strokeWidth="0.1" opacity="0.3"/>
            </pattern>
            
            {/* Glow effects */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Professional Trading Grid */}
          <rect width="100%" height="100%" fill="url(#professionalGrid)"/>
          
          {/* Major Price Levels - XAUUSD */}
          <g stroke="#334155" strokeWidth="1" opacity="0.6" fontSize="11" fontFamily="monospace" fill="#64748b">
            <line x1="0" y1="120" x2="1600" y2="120"/>
            <text x="20" y="115" className="text-xs font-mono">2080.00</text>
            <text x="1500" y="115" className="text-xs font-mono">H</text>
            
            <line x1="0" y1="200" x2="1600" y2="200"/>
            <text x="20" y="195" className="text-xs font-mono">2070.00</text>
            
            <line x1="0" y1="280" x2="1600" y2="280"/>
            <text x="20" y="275" className="text-xs font-mono">2060.00</text>
            
            <line x1="0" y1="360" x2="1600" y2="360"/>
            <text x="20" y="355" className="text-xs font-mono">2050.00</text>
            <text x="1500" y="355" className="text-xs font-mono">R</text>
            
            <line x1="0" y1="440" x2="1600" y2="440" strokeWidth="1.5" stroke="#fbbf24"/>
            <text x="20" y="435" className="text-xs font-mono font-bold" fill="#fbbf24">2040.00</text>
            <text x="1500" y="435" className="text-xs font-mono" fill="#fbbf24">KEY</text>
            
            <line x1="0" y1="520" x2="1600" y2="520"/>
            <text x="20" y="515" className="text-xs font-mono">2030.00</text>
            
            <line x1="0" y1="600" x2="1600" y2="600"/>
            <text x="20" y="595" className="text-xs font-mono">2020.00</text>
            
            <line x1="0" y1="680" x2="1600" y2="680"/>
            <text x="20" y="675" className="text-xs font-mono">2010.00</text>
            
            <line x1="0" y1="760" x2="1600" y2="760" strokeWidth="1.5" stroke="#10b981"/>
            <text x="20" y="755" className="text-xs font-mono font-bold" fill="#10b981">2000.00</text>
            <text x="1500" y="755" className="text-xs font-mono" fill="#10b981">SUP</text>
            
            <line x1="0" y1="840" x2="1600" y2="840"/>
            <text x="20" y="835" className="text-xs font-mono">1990.00</text>
            <text x="1500" y="835" className="text-xs font-mono">L</text>
          </g>
        </svg>
      </div>

      {/* Advanced Candlestick Chart Layer */}
      <div className="absolute inset-0 opacity-60">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1600 1000" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Candlestick Wicks/Shadows */}
          <g stroke="#4a5568" strokeWidth="2" opacity="0.9">
            {/* Bull trend wicks */}
            <line x1="60" y1="300" x2="60" y2="700">
              <animate attributeName="y1" values="300;280;300" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="140" y1="280" x2="140" y2="720"/>
            <line x1="220" y1="320" x2="220" y2="680"/>
            <line x1="300" y1="290" x2="300" y2="710">
              <animate attributeName="y1" values="290;270;290" dur="6s" repeatCount="indefinite"/>
            </line>
            <line x1="380" y1="310" x2="380" y2="690"/>
            <line x1="460" y1="270" x2="460" y2="730"/>
            <line x1="540" y1="300" x2="540" y2="700"/>
            <line x1="620" y1="280" x2="620" y2="720">
              <animate attributeName="y1" values="280;260;280" dur="5s" repeatCount="indefinite"/>
            </line>
            <line x1="700" y1="310" x2="700" y2="690"/>
            <line x1="780" y1="260" x2="780" y2="740"/>
            <line x1="860" y1="290" x2="860" y2="710"/>
            <line x1="940" y1="300" x2="940" y2="700"/>
            <line x1="1020" y1="280" x2="1020" y2="720">
              <animate attributeName="y1" values="280;260;280" dur="5.5s" repeatCount="indefinite"/>
            </line>
            <line x1="1100" y1="310" x2="1100" y2="690"/>
            <line x1="1180" y1="290" x2="1180" y2="710"/>
            <line x1="1260" y1="300" x2="1260" y2="700"/>
            <line x1="1340" y1="280" x2="1340" y2="720"/>
            <line x1="1420" y1="270" x2="1420" y2="730"/>
            <line x1="1500" y1="290" x2="1500" y2="710"/>
            
            {/* Bear correction wicks */}
            <line x1="100" y1="500" x2="100" y2="780"/>
            <line x1="260" y1="520" x2="260" y2="760"/>
            <line x1="420" y1="510" x2="420" y2="770"/>
            <line x1="580" y1="530" x2="580" y2="750"/>
            <line x1="740" y1="500" x2="740" y2="780"/>
            <line x1="900" y1="510" x2="900" y2="770"/>
            <line x1="1060" y1="520" x2="1060" y2="760"/>
            <line x1="1220" y1="510" x2="1220" y2="770"/>
            <line x1="1380" y1="500" x2="1380" y2="780"/>
          </g>
          
          {/* Professional Candlestick Bodies */}
          <g>
            {/* Strong Bullish Trend - Gold Rally */}
            <rect x="52" y="350" width="16" height="300" fill="url(#bullishCandle)" rx="2" filter="url(#glow)">
              <animate attributeName="height" values="300;330;300" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="y" values="350;335;350" dur="4s" repeatCount="indefinite"/>
            </rect>
            <rect x="132" y="320" width="16" height="350" fill="url(#bullishCandle)" rx="2"/>
            <rect x="212" y="370" width="16" height="280" fill="url(#bullishCandle)" rx="2"/>
            <rect x="292" y="330" width="16" height="320" fill="url(#bullishCandle)" rx="2" filter="url(#glow)">
              <animate attributeName="height" values="320;350;320" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="330;315;330" dur="6s" repeatCount="indefinite"/>
            </rect>
            <rect x="372" y="360" width="16" height="290" fill="url(#bullishCandle)" rx="2"/>
            <rect x="452" y="310" width="16" height="360" fill="url(#bullishCandle)" rx="2"/>
            <rect x="532" y="340" width="16" height="320" fill="url(#bullishCandle)" rx="2"/>
            <rect x="612" y="320" width="16" height="350" fill="url(#bullishCandle)" rx="2" filter="url(#glow)">
              <animate attributeName="height" values="350;380;350" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="320;305;320" dur="5s" repeatCount="indefinite"/>
            </rect>
            <rect x="692" y="350" width="16" height="300" fill="url(#bullishCandle)" rx="2"/>
            <rect x="772" y="300" width="16" height="380" fill="url(#bullishCandle)" rx="2"/>
            <rect x="852" y="330" width="16" height="340" fill="url(#bullishCandle)" rx="2"/>
            <rect x="932" y="340" width="16" height="320" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1012" y="320" width="16" height="350" fill="url(#bullishCandle)" rx="2" filter="url(#glow)">
              <animate attributeName="height" values="350;380;350" dur="5.5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="320;305;320" dur="5.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="1092" y="350" width="16" height="300" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1172" y="330" width="16" height="340" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1252" y="340" width="16" height="320" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1332" y="320" width="16" height="350" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1412" y="310" width="16" height="360" fill="url(#bullishCandle)" rx="2"/>
            <rect x="1492" y="330" width="16" height="340" fill="url(#bullishCandle)" rx="2"/>
            
            {/* Minor Bearish Corrections */}
            <rect x="92" y="540" width="16" height="120" fill="url(#bearishCandle)" rx="2"/>
            <rect x="252" y="560" width="16" height="80" fill="url(#bearishCandle)" rx="2"/>
            <rect x="412" y="550" width="16" height="100" fill="url(#bearishCandle)" rx="2">
              <animate attributeName="height" values="100;130;100" dur="3s" repeatCount="indefinite"/>
            </rect>
            <rect x="572" y="570" width="16" height="70" fill="url(#bearishCandle)" rx="2"/>
            <rect x="732" y="540" width="16" height="120" fill="url(#bearishCandle)" rx="2"/>
            <rect x="892" y="550" width="16" height="100" fill="url(#bearishCandle)" rx="2"/>
            <rect x="1052" y="560" width="16" height="80" fill="url(#bearishCandle)" rx="2"/>
            <rect x="1212" y="550" width="16" height="100" fill="url(#bearishCandle)" rx="2"/>
            <rect x="1372" y="540" width="16" height="120" fill="url(#bearishCandle)" rx="2"/>
          </g>
        </svg>
      </div>

      {/* Technical Analysis Layer */}
      <div className="absolute inset-0 opacity-50">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1600 1000" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* EMA 20 - Fast Moving Average */}
          <path 
            d="M60 550 Q200 520 400 540 T800 490 Q1000 470 1200 480 T1600 460" 
            stroke="#00ff7f" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.9"
            filter="url(#glow)"
          >
            <animate 
              attributeName="d" 
              values="M60 550 Q200 520 400 540 T800 490 Q1000 470 1200 480 T1600 460;M60 540 Q200 510 400 530 T800 480 Q1000 460 1200 470 T1600 450;M60 550 Q200 520 400 540 T800 490 Q1000 470 1200 480 T1600 460" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* EMA 50 - Slow Moving Average */}
          <path 
            d="M60 580 Q200 560 400 570 T800 530 Q1000 510 1200 520 T1600 500" 
            stroke="url(#maLine)" 
            strokeWidth="4" 
            fill="none" 
            opacity="0.8"
          >
            <animate 
              attributeName="d" 
              values="M60 580 Q200 560 400 570 T800 530 Q1000 510 1200 520 T1600 500;M60 570 Q200 550 400 560 T800 520 Q1000 500 1200 510 T1600 490;M60 580 Q200 560 400 570 T800 530 Q1000 510 1200 520 T1600 500" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Fibonacci Retracement Levels */}
          <g stroke="#fbbf24" strokeWidth="1" strokeDasharray="8,4" opacity="0.5">
            <line x1="0" y1="400" x2="1600" y2="400"/>
            <text x="1450" y="395" fontSize="10" fill="#fbbf24" fontFamily="monospace">61.8%</text>
          </g>
          <g stroke="#8b5cf6" strokeWidth="1" strokeDasharray="8,4" opacity="0.5">
            <line x1="0" y1="480" x2="1600" y2="480"/>
            <text x="1450" y="475" fontSize="10" fill="#8b5cf6" fontFamily="monospace">38.2%</text>
          </g>
          
          {/* Trend Channel */}
          <path 
            d="M60 450 Q400 420 800 430 Q1200 440 1600 420" 
            stroke="#10b981" 
            strokeWidth="2" 
            strokeDasharray="10,5" 
            fill="none" 
            opacity="0.6"
          />
          <path 
            d="M60 650 Q400 620 800 630 Q1200 640 1600 620" 
            stroke="#ef4444" 
            strokeWidth="2" 
            strokeDasharray="10,5" 
            fill="none" 
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Professional Volume Indicators */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1600 160">
          <g>
            {Array.from({length: 25}, (_, i) => {
              const height = 40 + Math.random() * 80;
              const isGreen = Math.random() > 0.25; // 75% green volume
              return (
                <rect 
                  key={i}
                  x={60 + i * 60} 
                  y={160 - height} 
                  width="18" 
                  height={height}
                  fill={isGreen ? "#10b981" : "#ef4444"}
                  opacity="0.7"
                  rx="1"
                >
                  {i % 3 === 0 && (
                    <animate 
                      attributeName="height" 
                      values={`${height};${height * 1.2};${height}`}
                      dur="4s" 
                      repeatCount="indefinite"
                    />
                  )}
                </rect>
              );
            })}
          </g>
          
          {/* Volume labels */}
          <g fontSize="9" fontFamily="monospace" fill="#64748b" opacity="0.8">
            <text x="10" y="30">Volume</text>
            <text x="10" y="45">125.4K</text>
            <text x="10" y="90">50.0K</text>
            <text x="10" y="135">10.0K</text>
          </g>
        </svg>
      </div>

      {/* Market Data Overlay */}
      <div className="absolute top-4 right-4 opacity-40">
        <div className="text-right font-mono text-xs space-y-1 text-slate-300">
          <div className="flex items-center justify-end gap-2">
            <span className="text-emerald-400">XAUUSD</span>
            <span className="text-emerald-400 font-bold">2045.67</span>
            <span className="text-emerald-400">+15.23</span>
          </div>
          <div className="text-slate-400">
            <span>H: 2048.91</span> | <span>L: 2032.44</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
