import { Aluno } from "../types/Aluno";

export const defaultAlunos: Aluno[] = [
  {
    id: "1",
    nome: "Gabriel Ferreira",
    cpf: "123.456.789-10",
    tipoContrato: "Mensal",
    dataNascimento: "2002-03-18",
    cidade: "Criciúma",
    bairro: "Centro",
    endereco: "Rua Henrique Lage, 245",
  },
  {
    id: "2",
    nome: "Mariana Souza",
    cpf: "987.654.321-00",
    tipoContrato: "Trimestral",
    dataNascimento: "1999-11-02",
    cidade: "Içara",
    bairro: "Presidente Vargas",
    endereco: "Rua João Lodetti, 89",
  },
  {
    id: "3",
    nome: "Lucas Henrique Martins",
    tipoContrato: "Anual",
    dataNascimento: "1995-07-25",
    cidade: "Forquilhinha",
    bairro: "Santa Líbera",
  },
  {
    id: "4",
    nome: "Ana Paula Ribeiro",
    cpf: "321.654.987-55",
    tipoContrato: "Mensal",
    cidade: "Criciúma",
    bairro: "Próspera",
    endereco: "Av. Universitária, 1020",
  },
  {
    id: "5",
    nome: "Rafael Costa Lima",
    tipoContrato: "Trimestral",
    dataNascimento: "2000-01-09",
    cidade: "Nova Veneza",
  },
];
