import { useState } from "react";
import { GrClose } from "react-icons/gr";

function EditContact({ editForm, handleChange, handleContactUpdate, isEditing }) {


  const [isOpen, setIsOpen] = useState(true)
  const [error, setIsError] = useState(false)

  let { id, first_name, last_name, phone, email } = editForm;

  const handleEditForm = async (e) => {
    e.preventDefault();
    if (
      !editForm.first_name ||
      !editForm.last_name ||
      !editForm.phone ||
      !editForm.email
    ) {
      return setIsError(true)
    }
    const response = await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    });
    const data = await response.json();
    handleContactUpdate(data);
  };

  return (
    <div className={!isOpen ? "modal-close" : "modal"}>
      <div className="modal-box">
        <div className="modal-body">
          <h3>Edit contact</h3>
          <form onSubmit={handleEditForm}>
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
          {error ? <p>Fields cannot be empty!</p> : ''}
        </div>
        <span onClick={() => setIsOpen(false)}>
          <GrClose />
        </span>
      </div>
    </div>
  );
}
export default EditContact;
