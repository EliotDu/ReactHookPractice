import { useContext } from "react"
import BooksContext from "../context/books"


export default function useBooksContext(){
    return useContext(BooksContext)
  
  }