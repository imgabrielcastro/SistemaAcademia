import { Aluno } from "../types/Aluno";

const STORAGE_KEY = "@alunos_CRIADOS";

export function getAlunosNoStorage(): Aluno[] {
  const alunos = localStorage.getItem(STORAGE_KEY);
  return alunos ? JSON.parse(alunos) : [];
}

export function salvarAlunoNoStorage(aluno: Aluno): void {
  const alunos = getAlunosNoStorage();
  alunos.push(aluno);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alunos));
}
