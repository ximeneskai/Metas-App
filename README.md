# 🚀 Aplicativo de Metas

O presente projeto consiste em um aplicativo de **Controle de Metas** escrito em **JavaScript**. 
Este aplicativo permite aos usuários gerenciar suas metas de forma interativa no terminal. 
O usuário pode cadastrar novas metas, listar metas existentes, marcar metas como concluídas, deletar metas, e visualizar metas realizadas e abertas.

## ⚙️ Método Utilizado

- **JavaScript**: A lógica principal do aplicativo é escrita em JavaScript, utilizando o módulo `@inquirer/prompts` para interação com o usuário e o módulo `fs` para operações de leitura e escrita de arquivos.

## ⌨️ Como funciona?

Este aplicativo funciona em modo terminal e permite ao usuário interagir com um menu para realizar várias operações relacionadas às metas. 
Aqui está um resumo das funcionalidades:

1. **Cadastrar Meta**:
   - O usuário pode adicionar uma nova meta ao aplicativo. Se a meta estiver vazia, o aplicativo solicitará a entrada novamente.

2. **Listar Metas**:
   - O aplicativo exibe uma lista de metas com a possibilidade de marcar ou desmarcar metas como concluídas. As metas podem ser visualizadas e selecionadas usando setas e a barra de espaço.

3. **Deletar Metas**:
   - Permite ao usuário selecionar metas para deletar. As metas desmarcadas são apresentadas para a escolha de exclusão.

4. **Metas Realizadas**:
   - Mostra uma lista das metas que foram marcadas como concluídas.

5. **Metas Abertas**:
   - Mostra uma lista das metas que ainda não foram concluídas.

6. **Salvar e Carregar Metas**:
   - As metas são salvas em um arquivo JSON (`metas.json`) e carregadas automaticamente quando o aplicativo inicia, garantindo persistência entre as execuções.

## 📦 Dependências

- `@inquirer/prompts`: Para criar uma interface interativa no terminal.
- `fs`: Para leitura e escrita de arquivos JSON.

## 🛠️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/ximeneskai/Metas-App
   ```
2. Inicie a aplicação:
 
   ```bash
   node index.js
   ```

## 💻 API em Funcionamento

![image](https://github.com/user-attachments/assets/2f13e344-7de0-4475-8424-c9f68d286d8c)

#### Este projeto foi elaborado na NLW Pocket - Javascript - 2024 produzida pela RocketSeat.
