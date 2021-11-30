const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect("info.html")
})

app.get('/test', (req, res) => {
    let data= {
        name: "widad",
        age: 19
    }
    res.send(data)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})