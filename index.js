const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo ao App de Metas!";

let meta = {
    value: "Tomar 3l de água por dia",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({
        message: "Digite a meta:"
    })
    if (meta.length == 0) {
        mensagem = "A meta não pode ser vazia."
        return cadastrarMeta()
    }

    metas.push(
        { value: meta, checked: false })

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message:"Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
        choices: [...metas]
    })

    
    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = "Meta(s) marcada(s) como concluída(s)"
    
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const itensADeletar = await checkbox({
        message: "Selecione um item para deletar:",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if(itensADeletar.length == 0) {
        mensagem = "Nenhum item a deletar"
        return        
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Metas deletadas com sucesso!"
    
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        mensagem = 'Não existem metas realizadas.'
        return
    }

    await select ({
        message: "Metas realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
    
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if (abertas.length == 0) {
        mensagem = 'Não existem metas abertas!'
        return
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const mostrarMensagem = () => {
    console.clear();

    if(mensagem != '') {
        console.log(' '); 
        console.log(mensagem);
        console.log(' '); 
        mensagem = ''
    }
}

const start = async () => {

    while(true){
        mostrarMensagem()
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }

            ]
        })

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()            
                break;
            case "listar":
                await listarMetas()
                break;
            case "deletar":
                await deletarMetas()
                break;
            case "realizadas":
                await metasRealizadas()
                break;
            case "abertas":
                await metasAbertas()
                break;
            case "sair":
                console.log("Até a próxima!");
                return
        }
    }
}

start();