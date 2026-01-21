import { Aula } from "../types/Aula";
import { Aluno } from "../types/Aluno";

// Alunos de exemplo
const alunosExemplo: Aluno[] = [
  {
    id: '1',
    nome: 'João Silva',
    cpf: '123.456.789-00',
    tipoContrato: 'Mensal',
    dataNascimento: new Date('1990-05-15'),
    cidade: 'São Paulo',
    bairro: 'Centro',
    endereco: 'Rua das Flores, 123'
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    cpf: '987.654.321-00',
    tipoContrato: 'Anual',
    dataNascimento: new Date('1985-10-20'),
    cidade: 'São Paulo',
    bairro: 'Vila Mariana',
    endereco: 'Av. Paulista, 1000'
  },
  {
    id: '3',
    nome: 'Carlos Santos',
    cpf: '456.789.123-00',
    tipoContrato: 'Trimestral',
    dataNascimento: new Date('1992-07-30'),
    cidade: 'São Paulo',
    bairro: 'Pinheiros',
    endereco: 'Rua dos Pinheiros, 500'
  }
];

export const aulasMock: Aula[] = [
  {
    id: "1",
    titulo: "Treino Funcional",
    modalidade: "Funcional",
    dataHoraInicio: "2026-02-02T06:30:00",
    situacao: "ABERTA",
    qntParticipantes: 7,
    qntVagas: 20,
    permiteAgendamentoPos: false,
    alunos: [alunosExemplo[0], alunosExemplo[1]]
  },
  {
    id: "2",
    titulo: "Aula de Yoga",
    modalidade: "Yoga",
    dataHoraInicio: "2026-02-02T07:30:00",
    situacao: "FINALIZADA",
    qntParticipantes: 18,
    qntVagas: 18,
    permiteAgendamentoPos: false,
    alunos: [alunosExemplo[1], alunosExemplo[2]]
  },
  {
    id: "3",
    titulo: "Pilates Solo",
    modalidade: "Pilates",
    dataHoraInicio: "2026-02-03T08:00:00",
    situacao: "ABERTA",
    qntParticipantes: 6,
    qntVagas: 12,
    permiteAgendamentoPos: false,
    alunos: [alunosExemplo[0], alunosExemplo[2]]
  },
  {
    id: "4",
    titulo: "Musculação Guiada",
    modalidade: "Musculação",
    dataHoraInicio: "2026-02-04T10:30:00",
    situacao: "EM ANDAMENTO",
    qntParticipantes: 10,
    qntVagas: 10,
    permiteAgendamentoPos: true,
    alunos: [alunosExemplo[0], alunosExemplo[1], alunosExemplo[2]]
  },
  {
    id: "5",
    titulo: "Cross Training",
    modalidade: "Cross",
    dataHoraInicio: "2026-02-05T12:00:00",
    situacao: "CANCELADA",
    qntParticipantes: 0,
    qntVagas: 16,
    permiteAgendamentoPos: false,
    alunos: []
  },
  {
    id: "6",
    titulo: "Aula de Spinning",
    modalidade: "Spinning",
    dataHoraInicio: "2026-02-06T17:30:00",
    situacao: "ABERTA",
    qntParticipantes: 14,
    qntVagas: 25,
    permiteAgendamentoPos: true,
    alunos: [alunosExemplo[1], alunosExemplo[2]]
  },
  {
    id: "7",
    titulo: "Funcional HIIT",
    modalidade: "Funcional",
    dataHoraInicio: "2026-02-09T18:30:00",
    situacao: "EM ANDAMENTO",
    qntParticipantes: 20,
    qntVagas: 20,
    permiteAgendamentoPos: true,
    alunos: [alunosExemplo[0], alunosExemplo[2]]
  },
  {
    id: "8",
    titulo: "Alongamento",
    modalidade: "Mobilidade",
    dataHoraInicio: "2026-02-10T19:30:00",
    situacao: "ABERTA",
    qntParticipantes: 5,
    qntVagas: 15,
    permiteAgendamentoPos: false,
    alunos: [alunosExemplo[1]]
  }
];