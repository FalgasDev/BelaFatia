# 🧁 Confeitaria - Bela Fatia

Este repositório contém uma aplicação web desenvolvida com **Next.js
16**, **React 19**, **TailwindCSS 4** e integração com **Axios** para
comunicação com APIs.\
A ideia central é criar uma experiência simples e elegante de **loja
virtual (online shop)** para uma confeitaria, permitindo que usuários
naveguem pelos produtos, adicionem itens ao carrinho e realizem
login/registro.

------------------------------------------------------------------------

## 📌 **Propósito da Aplicação**

O objetivo principal é oferecer uma plataforma moderna e intuitiva para:

-   Apresentação de produtos de confeitaria online
-   Gerenciamento de carrinho de compras
-   Processo básico de checkout
-   Criação e autenticação de usuários
-   Interface agradável e responsiva para clientes

A aplicação funciona como protótipo ou base para uma futura loja real.

------------------------------------------------------------------------

## 🎯 **Público-alvo**

Esta aplicação é destinada a:

-   Pequenas confeitarias que desejam ter presença digital
-   Estudantes e desenvolvedores aprendendo Next.js + React
-   Projetos de demonstração, portfólios ou trabalhos acadêmicos
-   Negócios locais que querem vender online de forma simples

------------------------------------------------------------------------

## 🧠 **Ideia Geral da Arquitetura**

A estrutura do projeto segue a arquitetura do **Next.js App Router**,
organizada da seguinte forma:

    app/
      checkout/
        page.jsx
      components/
        CartButton.jsx
        CartDrawer.jsx
        Footer.jsx
        Header.jsx
        UserMenu.jsx
      context/
        CartContext.jsx
      login/
        page.jsx
      register/
        page.jsx
      online-shop/
        page.jsx
      layout.jsx
      page.jsx
    public/

O **CartContext** centraliza o estado do carrinho, permitindo
compartilhamento entre componentes como:

-   Botão do carrinho
-   Drawer/lateral do carrinho
-   Página de checkout

------------------------------------------------------------------------

## 🧱 **Stack e Tecnologias Utilizadas**

  | Tecnologia  | Uso |
  | ------------- | ------------- |
  | **Next.js 16**  | Framework principal  |
  | **React 19**  | UI e componentes  |
  | **TailwindCSS 4**  | Estilização  |
  | **Axios**  | Consumo de APIs  |
  | **React Icons**  | Ícones  |

------------------------------------------------------------------------

## ▶️ **Como rodar a aplicação localmente**

### 🔧 **Pré-requisitos**

-   Node.js 18+
-   npm ou yarn

### 📥 1. Clone o repositório

``` bash
git clone <seu-repositorio>
cd confeitaria
```

### 📦 2. Instale as dependências

``` bash
npm install
# ou
yarn install
```

### 🚀 3. Inicie o servidor de desenvolvimento

``` bash
npm run dev
# ou
yarn dev
```

➡️ **http://localhost:3000**

------------------------------------------------------------------------

## 🏗️ Build para produção

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## 📚 Estrutura de Pastas

    app/
      ├── checkout/
      ├── components/
      ├── context/
      ├── login/
      ├── online-shop/
      ├── register/
      ├── globals.css
      ├── layout.jsx
      └── page.jsx
    public/
    package.json

------------------------------------------------------------------------

## 🤝 Contribuições

- Fábio Luiz Garrote Ramaldes
- Kaio Nogueira Mungo
- Bruna Bispo Andreata
- Diego da Silva Criscuolo
- Luiz Henrique Barros Calazans
