#  ಪುಟ Institucional - Centro Educacional Sol Brilhante

Este é um projeto de uma página institucional moderna e interativa para o Centro Educacional Jardim da Infância "Sol Brilhante". Desenvolvido com React, TypeScript e Tailwind CSS, o site apresenta a filosofia da escola, sua equipe, instalações e rotina diária de forma acolhedora e visualmente atraente.

![Screenshot da Aplicação](https://i.imgur.com/8a6OQ9B.png)

## ✨ Funcionalidades

- **Navegação SPA (Single Page Application):** Transição suave entre as páginas "Início" e "Sobre Nós" sem a necessidade de recarregar a página.
- **Rolagem Suave:** Links de navegação que levam o usuário a seções específicas da página inicial com uma animação de rolagem suave.
- **Componentes Interativos:**
  - **Equipe:** Seção de membros da equipe com um efeito de "acordeão" para exibir a biografia de cada profissional.
  - **Rotina Diária:** Uma linha do tempo interativa que revela detalhes de cada atividade.
  - **Galeria de Fotos:** Uma galeria de imagens das instalações com miniatura e visualização principal.
  - **Depoimentos:** Um carrossel automático que exibe depoimentos de pais e responsáveis.
- **Integração com WhatsApp:** Botões "Agende uma Visita" que redirecionam para uma conversa no WhatsApp, facilitando o contato.
- **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Animações Sutis:** Efeitos de fade-in e transições que proporcionam uma experiência de usuário mais fluida e agradável.

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca principal para a construção da interface de usuário.
- **TypeScript:** Adiciona tipagem estática ao JavaScript para um desenvolvimento mais robusto e seguro.
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida e consistente.
- **HTML5 & CSS3:** Estrutura e estilização base.

## 📂 Estrutura do Projeto

O projeto é organizado da seguinte forma para manter a clareza e a escalabilidade:

```
/
├── public/
├── src/
│   ├── components/      # Componentes React reutilizáveis (Header, Footer, Hero, etc.)
│   │   ├── icons/       # Ícones SVG como componentes React
│   │   └── ...
│   ├── constants.ts     # Dados estáticos da aplicação (membros da equipe, rotina, etc.)
│   ├── types.ts         # Definições de tipos TypeScript compartilhados
│   ├── App.tsx          # Componente principal que gerencia o roteamento e a exibição de páginas
│   └── index.tsx        # Ponto de entrada da aplicação React
├── index.html           # Arquivo HTML principal
└── README.md            # Este arquivo
```

## 🚀 Como Executar Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/cloudhadock-coder/modeloCentroEducacional.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd sol-brilhante
    ```

3.  **Instale as dependências:**
    (Assumindo que você tenha o Node.js e o npm instalados)
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

5.  Abra seu navegador e acesse `http://localhost:3000` (ou a porta indicada no terminal).

---

Este projeto foi criado como uma demonstração de habilidades em desenvolvimento front-end, focando em boas práticas de UI/UX, componentização e responsividade.
