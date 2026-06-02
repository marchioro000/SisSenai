// --- ROTAS DE CLIENTES ---
app.post('/salvar-cliente',(req, res)=> {
   const { nome, cpf, telefone } = req.body;
db.run('INSERT INTO clientes (nome, cpf, telefone) VALUES (?, ?, ?)', [nome, cpf, telefone], (err) => {
    if (err) return res.status(500).send(err.message);
    res.redirect('/clientes.html');
});

app.get('/listar-clientes', (req, res) => {
    db.all("SELECT * FROM clientes", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});
