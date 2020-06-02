import express from 'express'

const app = express();

app.get('/users', (req, res) => {
    res.json([
        'Natália',
        'Alice',
        'Miguel'
    ])
})

app.listen(3333);