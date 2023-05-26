try {
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Presunto",
        "Queijo",
        "Leite",
        "Ovomaltine",
        "Sabonete",
        "Amaciante",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto foi encontrado: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return!listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Infelizmente, nao temos o produto: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponivel: ${produto}`))
    
} catch {
    console.log('Nao foi possivel executar pedido de compra');
}

