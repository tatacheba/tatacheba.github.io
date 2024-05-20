const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Routes
const recipesRouter = require('./routes/recipes')
app.use('/api/recipes', recipesRouter)

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
