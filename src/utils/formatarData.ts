export function formatarDataHoraBR(dataISO: string): string {
  const data = new Date(dataISO);

  if (isNaN(data.getTime())) {
    throw new Error("Data inválida");
  }

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}
