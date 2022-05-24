const express = require('express');
const app = express();
const port = 3000;

//Necessário usar isso senão o servidor não aceitará JSON's no body
app.use(express.json());

const listaPessoas = [
    {
        id: 1,
        nome: "João",
    },
    {
        id: 2,
        nome: "Maria",
    },
    {
        id: 3,
        nome: "José",
    }
];

const listaUsuarios = [
    {
        id: 1,
        user: "Kenzo"
    }
];

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/home', (req, res) => {
    res.send("Hello world home");
})

app.get("/api/pessoas", (req, res) => {

    res.json(listaPessoas);
})

app.get('/api/usuarios', (req, res) => {
    res.json(listaUsuarios);
})

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    console.log(pessoa);
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
})

app.post('/api/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    res.json(usuario);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas[index] = pessoa;
    res.json(pessoa);
})

app.put('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios[index] = user;
    res.json(user);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa);
})

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = listaUsuarios.find(p => p.id == id);
    res.json(user);
})

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id)
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
})

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

//GET - Buscar informações // req.query
//POST - Criar informações // req.body
//PUT - Alterar informações // req.body
//DELETE - Deletar informações // req.params
//OPTIONS - informações que o servidor pode responder - não vai ser utilizado

//postman -> site para testar as requisições
//webhook.site -> site para pegar um servidor que poderá ser usado para ver se o post está funcionando