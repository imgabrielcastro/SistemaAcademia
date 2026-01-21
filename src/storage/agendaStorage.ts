const STORAGE_KEY = "@aulas";

export function getAulasNoStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function salvarAulasNoStorage(aulas: any[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aulas));
}
