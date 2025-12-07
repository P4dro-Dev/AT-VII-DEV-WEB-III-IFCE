# Projeto: Requisições Assíncronas (AJAX) com Flask

Este repositório contém a resolução da Tarefa da Unidade 7 da disciplina de **Desenvolvimento Web II** (IFCE). O objetivo do projeto é demonstrar a implementação de requisições assíncronas para criar uma experiência de usuário fluida, permitindo a interação com o servidor sem a necessidade de recarregar a página.

## 📋| Sobre o Projeto

A aplicação consiste em uma página web simples onde o usuário insere um texto. Através de JavaScript (AJAX/Fetch API), esse texto é enviado para um servidor Python (Flask), que realiza o processamento dos dados e devolve o resultado instantaneamente.

### Funcionalidades

```
* Envio Assíncrono: O formulário envia os dados via método `POST` sem *page reload*.
* Processamento no Back-end: O servidor conta o número de palavras e inverte o texto recebido.
* Manipulação do DOM: O resultado (JSON) é recebido pelo JavaScript e exibido na tela dinamicamente.
```

## 🛠️| Tecnologias Utilizadas

```
* **Back-end:** Python 3, Flask.
* **Front-end:** HTML5, CSS3, JavaScript (Vanilla).
* **Controle de Versão:** Git (Fluxo com Branch `DOM` e Merge na `main`).
```

## 📂 Estrutura de Arquivos

```
├── Relatório-Final-Descrição+Print'a  # Relatório Final (Com Print's, e explicação do projeto roadando.)
├── app.py              # Aplicação principal Flask (Servidor)
├── templates/
│   └── index.html      # Interface do usuário (Front-end)
├── static/
│   ├── main.js         # Lógica do cliente (AJAX e manipulação do DOM)
│   └── style.css       # Estilização da página
├── requirements.txt    # Dependências do projeto
└── README.md           # Documentação
```

## 🚀| Como Executar o Projeto
Siga os passos abaixo para rodar a aplicação em sua máquina local.
```
Pré-requisitos
Python 3.x instalado.

Git instalado.

Passo a Passo
Clone o repositório:

Bash

git clone [https://github.com/P4dro-Dev/AT-VII-DEV-WEB-III-IFCE/tree/main)
cd AT-VII-DEV-WEB-IFCE
Crie um ambiente virtual (Opcional, mas recomendado):

Bash

# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
Instale as dependências: Se não houver um arquivo requirements, instale o Flask manualmente:

Bash

pip install flask
Execute o servidor:

Bash

python app.py
Acesse a aplicação: Abra o seu navegador e vá para: http://127.0.0.1:5000/
```

## ⚙️| Fluxo de Desenvolvimento (Git)

Conforme solicitado na tarefa, o desenvolvimento seguiu o fluxo de branches:

Criação da branch dedicada ao desenvolvimento da funcionalidade:

Bash

git checkout -b DOM
Implementação do Front-end e Back-end.

Merge das alterações para a branch principal (main):

Bash

git checkout main
git merge DOM

## 📝| Detalhes da Implementação

Back-end (app.py)
O servidor possui uma rota /api/process que aceita requisições JSON. Ele realiza duas operações simples para fins de demonstração:

len(text.split()): Conta as palavras.

text[::-1]: Inverte a string.

Front-end (main.js)
O script intercepta o evento de submit do formulário (e.preventDefault()), utiliza a Fetch API para enviar o texto e, ao receber a resposta, injeta o HTML na div de resultado.
