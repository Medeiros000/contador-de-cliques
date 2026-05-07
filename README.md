# Contador de Cliques

Um aplicativo interativo de contador de cliques desenvolvido com **React** e **Vite**, com persistência de dados usando localStorage.

## 📋 Sobre o Projeto

Este é um projeto educacional que demonstra:
- **Componentes React** com hooks (`useState` e `useEffect`)
- **Persistência de dados** com localStorage
- **Validações** de limite mínimo (0) e máximo (10)
- **Interface responsiva** com CSS personalizado
- **Feedback visual** com mensagens dinâmicas

### Funcionalidades

✅ Incrementar o contador (máximo 10)  
✅ Decrementar o contador (mínimo 0)  
✅ Salvar o valor automaticamente no localStorage  
✅ Restaurar o valor ao recarregar a página  
✅ Mensagens informativas sobre os limites  
✅ Validação de limites em tempo real  

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** versão 16 ou superior
- **npm** (incluído com Node.js)

### Instalação

1. Acesse o diretório do projeto:
```bash
cd contador-de-cliques
```

2. Instale as dependências:
```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot reload:
```bash
npm run dev
```

A aplicação será aberta em `http://localhost:5173` (ou a porta indicada no terminal).

### Build para Produção

Para criar uma versão otimizada para produção:
```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

### Visualizar Build de Produção

Para testar a build de produção localmente:
```bash
npm run preview
```

### Lint do Código

Para verificar a qualidade do código:
```bash
npm run lint
```

## 🛠️ Tecnologias Utilizadas

- **React 19.2** - Biblioteca UI
- **Vite 8** - Bundler e servidor de desenvolvimento
- **JavaScript (ES6+)** - Linguagem
- **CSS 3** - Estilização
- **ESLint** - Verificação de código

## 📁 Estrutura do Projeto

```
contador-de-cliques/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos do aplicativo
│   ├── main.jsx         # Ponto de entrada
│   ├── index.css        # Estilos globais
│   └── assets/          # Imagens e recursos
├── public/              # Arquivos públicos
├── index.html           # HTML principal
├── vite.config.js       # Configuração do Vite
├── eslint.config.js     # Configuração do ESLint
└── package.json         # Dependências e scripts
```

## 💾 LocalStorage

O contador salva seu valor automaticamente no localStorage do navegador. Isso significa que:
- O valor persiste após fechar a página
- Cada recarga da página restaura o último valor
- Os dados são armazenados localmente no navegador

## 🎨 Interface

A aplicação possui uma interface simples com:
- Logo do Devstart
- Título "Contador de cliques"
- Três botões:
  - **-** : Diminui o contador (mínimo 0)
  - **Contador: N** : Exibe o valor atual (desativado)
  - **+** : Aumenta o contador (máximo 10)
- Mensagens informativas sobre os limites

## 📝 Notas

- O contador tem limite mínimo de **0** e máximo de **10**
- Ao atingir os limites, mensagens aparecem na tela
- O valor é sincronizado com o localStorage em tempo real

---

**Desenvolvido com ❤️ por Devstart**
