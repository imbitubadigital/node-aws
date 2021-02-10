require('dotenv/config');
const Express = require('express');
const cors = require('cors');

const app = Express();
app.use(cors());
app.use(Express.json())

app.get('/',(request, response) => {
    return response.status(200).json({ message: "Funcionando rota get", api: process.env.MESSAGE});
});

app.post('/posts',(request, response) => {
    return response.status(200).json({ message: "Funcionando rota post", data: request.body});
});



app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})



