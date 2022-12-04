import { useEffect, useState } from "react"
import { SpinnerCircular } from 'spinners-react';

function Home() {

  const [contacts, setContacts] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:5000/contacts')
      const data = await response.json()
      setContacts(data)
      setLoading(false)
    }
    fetchContacts()

  },[])

  return (
    <>
      {loading ? <SpinnerCircular color="black" secondaryColor="#777"/> : 
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((c) => (
            <tr key={c.id}>
              <td>{c.first_name}</td>
              <td>{c.last_name}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  )
}
export default Home