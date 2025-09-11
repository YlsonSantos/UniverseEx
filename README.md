# UniverseEx 🚀

Bem-vindo ao **UniverseEx**, uma aplicação web interativa que permite explorar a vasta galeria de imagens capturadas pelos rovers da NASA diretamente da superfície de Marte. Navegue por milhares de fotografias, filtre por rover, câmera ou data, e mergulhe nas paisagens do planeta vermelho.

## ✨ Funcionalidades

- **Galeria Interativa:** Visualize imagens de alta resolução da superfície marciana.
- **Filtros Avançados:** Filtre as fotos por rover (Curiosity, Opportunity, Spirit, Perseverance), por uma das diversas câmeras disponíveis e por data terrestre.
- **Visualização Detalhada:** Clique em qualquer foto para vê-la em um modal com informações detalhadas, como a data em que foi tirada, o rover e a câmera utilizada.
- **Design Responsivo:** A interface se adapta perfeitamente a qualquer tamanho de tela, seja no desktop, tablet ou celular.
- **Interface Temática:** Desfrute de uma experiência imersiva com um design inspirado na exploração espacial e no planeta Marte.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack de desenvolvimento web moderna e performática:

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Roteamento:** [React Router](https://reactrouter.com/)
- **Fonte de Dados:** [NASA Mars Rover Photos API](https://api.nasa.gov/)

## 🚀 Começando

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [Link do Projeto](https://github.com/YlsonSantos/UniverseEx.git)
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
    Na raiz do projeto, crie um arquivo chamado `.env.local` e adicione sua chave de API nele, como no exemplo abaixo. O prefixo `VITE_` é essencial.
    ```
    VITE_NASA_API_KEY=SUA_CHAVE_DA_API_AQUI
    ```

### Rodando o Projeto

Com tudo configurado, inicie o servidor de desenvolvimento:

```bash
npm run dev
```