# Como usar

1. Baixe a dependencia:
    yarn add -D json-server.
    Crie um arquivo no diretório ./mock/database.json

2. Execute o seguinte comando:

    yarn json-server -w -p 3333 ./mock/database.json

    ou

    npm json-server -w -p 3333 ./mock/database.json

   # OBS
   Você pode criar um atalho no package.json para rodar o json-server
   1. Em scripts:
    "scripts": {
        "mock": "yarn json-server -w -p 3333 ./mock/database.json"
    },

    2. Rode o comando:
        yarn mock