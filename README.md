# UniverseEx 🚀

Bem-vindo ao **UniverseEx**, uma aplicação web interativa que permite explorar a vasta galeria de imagens capturadas pelos rovers da NASA diretamente da superfície de Marte. Navegue por milhares de fotografias, filtre por rover, câmera ou data, e mergulhe nas paisagens do planeta vermelho.

## ✨ Funcionalidades Detalhadas

- **Galeria Interativa:** Uma interface fluida e elegante para visualizar imagens de alta resolução da superfície marciana, com carregamento otimizado (*lazy loading*) para melhor performance.
- **Filtros Avançados:** Filtre as fotos com precisão utilizando múltiplos critérios:
    - **Rovers:** Curiosity, Opportunity, Spirit e Perseverance.
    - **Câmeras:** FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI e NAVCAM.
    - **Data Terrestre:** Selecione uma data específica para ver as fotos daquele dia.
- **Visualização Detalhada:** Ao clicar em uma foto, um modal exibe a imagem em maior resolução junto com informações detalhadas, como a data terrestre, o nome completo da câmera e o rover que a capturou.
- **Paginação:** Navegue facilmente entre as páginas de resultados da galeria.
- **Design Responsivo e Temático:** A interface se adapta perfeitamente a qualquer tamanho de tela. O design, inspirado no espaço e em Marte, utiliza um tema escuro com gradientes e efeitos de brilho para uma experiência imersiva.

## 🛠️ Tecnologias e Arquitetura

Este projeto foi construído com uma stack de desenvolvimento web moderna e performática, focada em boas práticas e na experiência do desenvolvedor.

- **Frontend:**
    - **[React](https://react.dev/):** Biblioteca para a construção da interface de usuário.
    - **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.
    - **[Vite](https://vitejs.dev/):** Ferramenta de build extremamente rápida para o desenvolvimento frontend.

- **Estilização:**
    - **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first para estilização rápida e customizável.
    - **[shadcn/ui](https://ui.shadcn.com/):** Coleção de componentes de UI reutilizáveis, construídos sobre Radix UI e Tailwind CSS.

- **Gerenciamento de Dados:**
    - **[React Query (`@tanstack/react-query`)]:** Utilizado para o gerenciamento de estado assíncrono, cache de requisições, e otimização da busca de dados da API da NASA.
    - **[NASA Mars Rover Photos API](https://api.nasa.gov/):** Fonte de dados oficial para todas as imagens e informações.

- **Roteamento:**
    - **[React Router](https://reactrouter.com/):** Para a criação de rotas na aplicação (ex: página 404).

## 🚀 Começando

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/YlsonSantos/UniverseEx.git
    cd UniverseEx
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Variáveis de Ambiente

Para que a aplicação possa se comunicar com a API da NASA, você precisa de uma chave de API.

1.  **Obtenha sua chave de API:**
    Acesse o site da [NASA Open APIs](https://api.nasa.gov/) e gere sua chave gratuita.

2.  **Configure o arquivo .env:**
    Na raiz do projeto, crie um arquivo chamado `.env.local` e adicione sua chave de API nele, como no exemplo abaixo. O prefixo `VITE_` é essencial para que o Vite exponha a variável de ambiente para o código do frontend.
    ```
    VITE_NASA_API_KEY=SUA_CHAVE_DA_API_AQUI
    ```

### Rodando o Projeto

Com tudo configurado, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080` (ou outra porta indicada no terminal).

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar o projeto, siga os passos abaixo:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova **Branch** (`git checkout -b feature/sua-feature`).
3.  Faça o **Commit** das suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça o **Push** para a Branch (`git push origin feature/sua-feature`).
5.  Abra um **Pull Request**.

## 📄 Licença

Este projeto está sob a licença MIT.