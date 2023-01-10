import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context'
export default function BookEdit({book,onSubmit}) {

  const [title,setTitle]=useState(book.title)
  const{editBookById}  = useBooksContext()

  const handleChange=(e)=>{
    setTitle(e.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    onSubmit()
    editBookById(book.id,title)
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit} >
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange}/>
      <button className='button is-primary'>Save</button>
    </form>
  )
}
