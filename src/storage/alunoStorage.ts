import { Aluno } from "../types/Aluno";

const STORAGE_KEY = "@alunos";

export function getAlunosNoStorage(): Aluno[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function salvarAlunosNoStorage(alunos: Aluno[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alunos));
}
