import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  return (
    // Emmet: table.table.table-striped.table-hover>thead>tr>th*3
    //tbody>tr>td*3
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            style={{ cursor: "pointer" }}
            key={c.id}
            //onClick={onClick} Esto no funciona porque no le pasamos el id
            onClick={() => onClick(c.id)}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
