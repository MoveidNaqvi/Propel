import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditContact from "./EditContact";

function Table({ contacts, search, handleDelete, updateContact }) {

  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    id: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: ""
  })

  const handleContactUpdate = (updatedContact) => {
    setIsEditing(false)
    updateContact(updatedContact)
  }

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  const changeEditState = (contact) => {
    if(contact.id === editForm.id) {
      setIsEditing(isEditing => !isEditing)
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing)
    }
  }

  const captureEdit = (clickedContact) => {
    let filtered = contacts.filter(contact => contact.id === clickedContact.id)
    setEditForm(filtered[0])
  }


  return (
    <>
    {isEditing ? (
      <EditContact editForm={editForm} handleChange={handleChange} handleContactUpdate={handleContactUpdate} />
    ) : null}
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
                    <button className="btn-sm" onClick={() => {
                      captureEdit(c)
                      changeEditState(c)
                    }}>
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
  );
}
export default Table;
