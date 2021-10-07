const customExpress = require('./config/customExpress')
const PORT = 3000
const HOST = '0.0.0.0'

const app = customExpress()

app.listen(PORT, HOST)