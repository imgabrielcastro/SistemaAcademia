# Sistema Academia (Next Fit)

Aplicação web desenvolvida como **desafio técnico** para a Next Fit, com foco em uma experiência simples e responsiva para **gestão de alunos** e **agenda de aulas**.

## Principais funcionalidades

- **Alunos**
  - Cadastro e listagem
  - Edição e remoção
- **Agenda**
  - Criação e listagem de aulas
  - Filtro por data
- **Persistência local** via `localStorage` (sem backend)

## Tecnologias

- React + TypeScript
- Vite
- Material UI (MUI)
- React Router
- React Hook Form + Yup (validações)
- Day.js (datas)
- Ideia de UI/UX baseada em um projeto gerado no Lovable.
- Lib Virtuoso para listas performáticas.
- Skeleton para simular o loading de um backend futuro, para melhor experiência do usuário.

## Regras de negócio (resumo)

- Aulas **finalizadas/encerradas** não podem ser alteradas
- Não é possível exceder o **número máximo de alunos** de uma aula
- Aulas sem a opção de **agendamento pós-início** não permitem adicionar alunos após o início

## Como rodar localmente

### Requisitos

- Node.js (recomendado: versão LTS)
- npm

### Instalação e execução

```bash
npm install
npm run dev
```

Depois acesse:

- `http://localhost:5173`

## Scripts

```bash
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build
npm run lint     # lint do projeto
```

## Deploy

O projeto foi publicado no **Vercel**.

## Próximos passos

- Adicionar um backend
- Adicionar uma tela de configurações de perfil
- Adicionar mais opções de contratos e criação de contratos
- Adicionar mais filtros para visualização das aulas