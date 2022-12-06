import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Table({ contacts, search, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.length <= 0 ? (
          <tr>
            <td colSpan={5}>
              <span>No contacts found!</span>
            </td>
          </tr>
        ) : (
          contacts
            ?.filter((c) => {
              if (search == "") {
                return c;
              } else if (
                c.first_name
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                c.last_name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return c;
              }
            })
            .map((c) => (
              <tr key={c.id}>
                <td>{c.first_name}</td>
                <td>{c.last_name}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
                <td>
                  <div className="action-btns">
                    <button className="btn-sm">
                      <FaEdit size={20} />
                    </button>
                    <button
                      className=" btn-sm"
                      onClick={() => handleDelete(c.id)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
        )}
      </tbody>
    </table>
  );
}
export default Table;
