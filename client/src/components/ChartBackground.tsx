export default function ChartBackground() {
  // Generate realistic gold price data points for an upward trend
  const generateGoldPricePoints = () => {
    const points = [];
    let basePrice = 1800; // Starting gold price around $1800
    
    for (let i = 0; i < 24; i++) {
      const x = 50 + (i * 45); // Spacing between candles
      const trend = i * 8; // Upward trend
      const noise = (Math.random() - 0.5) * 15; // Price volatility
      const price = basePrice + trend + noise;
      
      // Generate OHLC data for each candle
      const open = price + (Math.random() - 0.5) * 8;
      const close = price + (Math.random() - 0.5) * 8;
      const high = Math.max(open, close) + Math.random() * 12;
      const low = Math.min(open, close) - Math.random() * 8;
      
      // Convert price to Y coordinate (higher prices = lower Y values)
      const priceToY = (p: number) => 650 - ((p - 1780) * 2); // Scale factor for visualization
      
      points.push({
        x,
        open: priceToY(open),
        high: priceToY(high),
        low: priceToY(low),
        close: priceToY(close),
        isGreen: close > open
      });
    }
    return points;
  };

  const candleData = generateGoldPricePoints();

  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
      {/* Professional Trading Platform Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 opacity-30"></div>
      
      {/* Main Trading Chart Interface */}
      <div className="absolute inset-0 opacity-25">
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full animate-bg-shift"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid Lines */}
          <defs>
            <pattern id="goldGrid" width="50" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-400/30"
              />
            </pattern>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Grid Background */}
          <rect width="100%" height="100%" fill="url(#goldGrid)" />
          
          {/* Price Level Lines */}
          <line x1="0" y1="200" x2="1200" y2="180" stroke="#fbbf24" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
          <line x1="0" y1="350" x2="1200" y2="330" stroke="#fbbf24" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
          <line x1="0" y1="500" x2="1200" y2="480" stroke="#fbbf24" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
          
          {/* Main Upward Trend Line */}
          <path
            d="M 70 580 Q 200 540 350 480 T 650 350 T 950 250 L 1100 200"
            stroke="#10b981"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            opacity="0.7"
          />
          
          {/* Gold Candlesticks */}
          {candleData.map((candle, i) => (
            <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
              {/* Wick (High-Low line) */}
              <line
                x1={candle.x}
                y1={candle.high}
                x2={candle.x}
                y2={candle.low}
                stroke={candle.isGreen ? "#10b981" : "#ef4444"}
                strokeWidth="2"
                opacity="0.8"
              />
              {/* Candle Body */}
              <rect
                x={candle.x - 10}
                y={Math.min(candle.open, candle.close)}
                width="20"
                height={Math.abs(candle.close - candle.open)}
                fill={candle.isGreen ? "#10b981" : "#ef4444"}
                stroke={candle.isGreen ? "#059669" : "#dc2626"}
                strokeWidth="1"
                rx="2"
                opacity={candle.isGreen ? "0.9" : "0.7"}
              />
            </g>
          ))}
          
          {/* Volume Bars (Gold themed) */}
          {Array.from({ length: 20 }, (_, i) => (
            <rect
              key={i}
              x={70 + i * 45}
              y={720 - (15 + Math.random() * 35)}
              width="25"
              height={15 + Math.random() * 35}
              fill="url(#goldGradient)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
              rx="2"
            />
          ))}
          
          {/* Floating Gold Particles */}
          {Array.from({ length: 12 }, (_, i) => (
            <circle
              key={i}
              cx={150 + i * 80}
              cy={200 + Math.sin(i * 0.5) * 150}
              r="3"
              fill="#fbbf24"
              className="animate-particles"
              style={{ animationDelay: `${i * 0.3}s` }}
              opacity="0.6"
            />
          ))}
          
          {/* Price Labels (simulated) */}
          <text x="20" y="200" fill="#fbbf24" fontSize="12" opacity="0.6">$2000</text>
          <text x="20" y="350" fill="#fbbf24" fontSize="12" opacity="0.6">$1900</text>
          <text x="20" y="500" fill="#fbbf24" fontSize="12" opacity="0.6">$1800</text>
          
          {/* Chart Title */}
          <text x="600" y="40" fill="#fbbf24" fontSize="16" textAnchor="middle" opacity="0.5" fontWeight="bold">
            XAU/USD • GOLD SPOT • BULLISH TREND
          </text>
        </svg>
      </div>
    </div>
  );
}