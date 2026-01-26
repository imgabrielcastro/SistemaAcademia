import { Aula } from "../types/Aula";

const STORAGE_KEY = "@aulas";

export function getAulasNoStorage(): Aula[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function salvarAulasNoStorage(aulas: Aula[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aulas));
}
