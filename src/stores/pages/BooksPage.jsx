import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BooksPage = () => {

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className='pageSection'>
        {
        booksData.map((item)=>{
            return(
                <div>
                    <Link to={`/books/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.title}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default BooksPage