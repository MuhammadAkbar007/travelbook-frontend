import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateTravelBook = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [descr, setDescr] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  const fetchData = async () => {
    const {data} = await axios.get(`http://localhost:5000/api/travel/${id}`)
    setTitle(data.travel.title)
    setImage(data.travel.image)
    setDescr(data.travel.descr)
  }

  const updateHandler = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/travel/update/${id}`, {title, descr, image})
    navigate('/')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <form className='mt-3' onSubmit={updateHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title" value={title}
        onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">Description</label>
        <input type="text" className="form-control" id="descr" name="descr" value={descr} 
        onChange={e => setDescr(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input type="text" className="form-control" id="image" name="image" value={image}
        onChange={e => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default UpdateTravelBook