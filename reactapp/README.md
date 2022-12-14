# Dashboard Plants
Projeto criado com ReactJS e Vite.

Para consumir API no frontend foi utilizada Axios.

Para controle de navegação das páginas foi utilizada o react router dom.

## Criando projeto com o Vite
```
npm create vite@latest reactapp --template react

Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.

Selecione o react e a variant react

```

## Executando projeto

```
Certifique-se que está na pasta do projeto e execute o comando

npm install

Após a instalação das dependências, execute o comando abaixo:

npm run dev 

Após executar o comando acima, abra o seu navegador e acesse o endereço:

http://localhost:3000/

O arquivo index.html é o principal arquivo do projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

```

## Adicionando TypeScript
```
Instalando o TypeScript no projeto:

npm install --typescript --save-dev

Criando o arquivo tsconfig.json

tsconfig.json

{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src"
  ]
}

Instalando o @types do react

npm i --save-dev @types/react

```

##
![tela1](https://user-images.githubusercontent.com/82118386/187218191-fdf89cca-e5de-4297-a8f2-d33d26129de8.png)

![tela2](https://user-images.githubusercontent.com/82118386/187219467-624c46ab-3ed1-4299-b79b-2184bc2d6aac.png)
