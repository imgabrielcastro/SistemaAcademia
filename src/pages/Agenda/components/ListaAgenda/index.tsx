import CardAgenda from "../CardAgenda";
import { aulasMock } from "../../../../data/HorariosMock";

export default function ListaAgenda() {
    return aulasMock.map((aula) => (
        <CardAgenda key={aula.id} card={aula} />
    ))

}