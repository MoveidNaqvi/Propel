import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Home() {
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/contacts");
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    };
    fetchContacts();
  }, [deleted]);

  const handleDelete = async (id) => {
    setDeleted(false);
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    });
    setDeleted(true);
  };

  return (
    <>
      {loading ? (
        <SpinnerCircular color="black" secondaryColor="#777" />
      ) : (
        <>
          <input type="text" className="search-bar" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />
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
                contacts?.filter((c) => {
                  if(search == "") {
                    return c
                  } else if (c.first_name.toLowerCase().includes(search.toLocaleLowerCase()) || c.last_name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return c
                  }
                }).map((c) => (
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
        </>
      )}
    </>
  );
}
export default Home;
