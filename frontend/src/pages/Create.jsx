import {useState} from 'react'

function Create() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email
    }
    await fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
    setFirstName('')
    setLastName('')
    setPhone('')
    setEmail('')
    setLoading(false)
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor="last-name">Last name</label>
            <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="phone">Phone</label>
            <input type="tel" value={phone} required onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <button className="btn btn-block" disabled={true ? loading : false}>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Create