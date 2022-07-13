import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TravelBook = () => {

  const [travelBook, setTravelBook] = useState([])
  const [id, setId] = useState('')

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/api/travel')
    setTravelBook(data.travels)
  }

  const deleteHandler = async e => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <>
    {
      travelBook.map(tb => (
        <div className="card my-3" key={tb._id}>
          <img src={tb.image} className="card-img-top" alt={tb.title} />
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.descr}</p>
            <div className="d-flex justify-content-start">
              <Link className="btn btn-primary" to={`/update/${tb._id}`}>Update</Link>
              <form onSubmit={deleteHandler}>
                <button className="btn btn-danger mx-5" type='submit' onClick={() => setId(tb._id)}>Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))
    }
  </>
}

export default TravelBook