import express, { staticExpress } from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(staticExpress('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
