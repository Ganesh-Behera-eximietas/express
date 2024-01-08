app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

const cb2 = function (req, res) {
    res.send('Hello from C!')
}
  
app.get('/example/c', [cb0, cb1, cb2])