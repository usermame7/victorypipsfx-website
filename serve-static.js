const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from root directory
app.use(express.static('.'));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 VictoryPipsFX static server running at http://localhost:${PORT}`);
  console.log('📁 Serving files from current directory');
  console.log('✅ Ready for deployment testing');
});