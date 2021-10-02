const cors = require("cors")
const app = require("./app");

const PORT = process.env.PORT ? process.env.PORT : 8080

app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }!`);
    console.log(`🚀 Server ready at http://localhost:${ PORT }`)
})
