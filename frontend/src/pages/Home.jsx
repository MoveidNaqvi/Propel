import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import Table from "../components/Table";

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


  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map(
      contact => {
        if(contact.id === updatedContact.id){
          return updatedContact
        } else {
          return contact
        }
      }
    )
    setContacts(updatedContacts)
  }

  const handleDelete = async (id) => {
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
          <Table contacts={contacts} search={search} handleDelete={handleDelete} updateContact={updateContact}/>
        </>
      )}
    </>
  );
}
export default Home;
