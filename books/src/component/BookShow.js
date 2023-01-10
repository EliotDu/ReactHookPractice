import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context'
import BookEdit from './BookEdit'

export default function BookShow({book}) {
  const [showEdit,setShowEdit]=useState(false)
  const {deleteBookById} =useBooksContext()
  const handleDelClick=()=>{
    deleteBookById(book.id)
  }
  const handleEditClick=()=>{
    setShowEdit(!showEdit)
  }
  const handleSubmit=()=>{
    setShowEdit(false)
  
  }

  let content  = <h3>{book.title}</h3>
  if(showEdit){
    content= <BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
    <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`}alt=""/>
      <div>{ content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDelClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
