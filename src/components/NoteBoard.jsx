import { useNotas } from "../context/NotesContext"

function NoteBoard() {
    const { notas } = useNotas();
    return (
        <> 
        <ul>
            {notas.map((n) =>
            <li key={n.id}>
                <h2>{n.text}</h2>
            </li>
            )}
        </ul>
        <form>
  <label clasName="formulario">
    Crear nueva nota 
    <input type="texto" name="name" />
  </label>
  <input type="submit" value="Submit" />

</form>
        </>
    );
}

export default NoteBoard;