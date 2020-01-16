const router = require('express').Router()

//this returns a shuffled deck
router.get("/new", (req, res, next) => {
  res.send(`
    <html>
      <head>
        <title>My site</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  `)
})

module.exports = router
