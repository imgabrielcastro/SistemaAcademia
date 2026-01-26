import { Aluno } from "../types/Aluno";

export const defaultAlunos: Aluno[] = [
  {
    id: "1",
    nome: "Gabriel Ferreira",
    cpf: "12345678910",
    tipoContrato: "Mensal",
    dataNascimento: new Date(2002, 2, 18),
    cidade: "Criciúma",
    bairro: "Centro",
    endereco: "Rua Henrique Lage, 245",
  },
  {
    id: "2",
    nome: "Mariana Souza",
    cpf: "98765432100",
    tipoContrato: "Trimestral",
    dataNascimento: new Date(1999, 10, 2),
    cidade: "Içara",
    bairro: "Presidente Vargas",
    endereco: "Rua João Lodetti, 89",
  },
  {
    id: "3",
    nome: "Lucas Henrique Martins",
    tipoContrato: "Anual",
    dataNascimento: new Date(1995, 6, 25),
    cidade: "Forquilhinha",
    bairro: "Santa Líbera",
  },
  {
    id: "4",
    nome: "Ana Paula Ribeiro",
    cpf: "32165498755",
    tipoContrato: "Mensal",
    cidade: "Criciúma",
    bairro: "Próspera",
    endereco: "Av. Universitária, 1020",
  },
  {
    id: "5",
    nome: "Rafael Costa Lima",
    tipoContrato: "Trimestral",
    dataNascimento: new Date(2000, 0, 9),
    cidade: "Nova Veneza",
  },
];
