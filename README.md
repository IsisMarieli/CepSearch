# 📍 Busca CEP Mobile

> Aplicativo mobile para consulta de endereços via CEP, construído com Ionic + Angular e integrado à API ViaCEP.

![Ionic](https://img.shields.io/badge/Ionic-7-3880FF?style=flat-square&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![ViaCEP](https://img.shields.io/badge/API-ViaCEP-00b894?style=flat-square)

---

## 📖 Sobre o projeto

Aplicativo mobile desenvolvido com **Ionic Framework** e **Angular**, utilizando arquitetura orientada a serviços. O usuário digita um CEP, o app consulta a API ViaCEP em tempo real e exibe o endereço completo, além de manter um histórico local das consultas realizadas.

---

## 📱 Telas (Tabs)

| Tab | Tela | Descrição |
|-----|------|-----------|
| **Tab 1** | Buscar CEP | Campo de entrada para digitar o CEP e disparar a consulta à API |
| **Tab 2** | Exibir Endereço | Apresenta logradouro, bairro, cidade, UF e complemento do endereço encontrado |
| **Tab 3** | Histórico | Lista de todos os CEPs consultados na sessão com acesso rápido ao resultado |

---

## 🛠️ Tecnologias

- **Ionic Framework** — UI components nativos para Android e iOS
- **Angular** — Framework SPA com injeção de dependência
- **TypeScript** — Tipagem estática e interfaces de dados
- **ViaCEP API** — API pública gratuita de consulta de CEPs
- **HttpClient** — Módulo Angular para requisições HTTP
- **Angular Service** — Camada de serviço para lógica de negócio

---

## 🔄 Fluxo da aplicação

```
Usuário digita CEP → CepService.buscar() → GET ViaCEP → Tab 2 exibe endereço → Tab 3 salva no histórico
```

## 🗂️ Estrutura do projeto

```
src/app/
├── tabs/                  # Roteamento das tabs
│   ├── tabs.page.html
│   ├── tabs.page.ts
│   └── tabs-routing.module.ts
├── tab1/                  # Tela: Buscar CEP
│   ├── tab1.page.html
│   └── tab1.page.ts
├── tab2/                  # Tela: Exibir endereço
│   ├── tab2.page.html
│   └── tab2.page.ts
├── tab3/                  # Tela: Histórico
│   ├── tab3.page.html
│   └── tab3.page.ts
└── services/
    └── cep.service.ts     # Lógica + HttpClient + histórico
```

---

## ⚙️ Como executar

### Pré-requisitos

- Node.js 
- npm
- Ionic CLI

### Instalação

```bash
# Instalar o Ionic CLI globalmente
npm install -g @ionic/cli

# Criar o projeto com tabs
ionic start cepApp tabs --type=angular

# Entrar na pasta do projeto
cd cepApp

# Instalar dependências
npm install

# Rodar no navegador
ionic serve
```

---

Projeto acadêmico · Ionic + Angular · ViaCEP