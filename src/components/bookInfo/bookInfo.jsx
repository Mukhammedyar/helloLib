import React from 'react'
import { useParams } from 'react-router-dom'


export default function BookInfo({ books }) {
  const { id } = useParams()

  const infoBook = books.filter(book => book.id === +id);
  

  return (
    <div className='w-full h-[100vh] bg-gray-800 text-white px-5 flex items-center'>

      {infoBook.map(book => (
        <div className='flex items-center w-[50%]'>
          <div className="imageBook px-10">
            <img src={book.imageLink} className="shadow-lg rounded-lg border object-cover w-[300px] h-[100px]"/>
          </div>
          <div className="infoBook basis-50 w-1/2">
            <h1>{ book.name}</h1>
            <h3>{ book.author}</h3>
            <p className='text-lg'>price: ${book.price}</p>
            <p className="text-blue-500 ">In {book.dateOfBook} year</p>
          </div>
        </div>
     ))}
    
    
    </div>
  )
}
