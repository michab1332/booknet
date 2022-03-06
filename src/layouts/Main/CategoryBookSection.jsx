import React from 'react'

import '../../assets/styles/CategoryBookSection.css'

import BookItem from '../../components/BookItem'

export default function CategoryBookSection({ text, data }) {
  return (
    <div className="categoryBookSection">
      <p className="categoryBookSection__title">{text}</p>
      <div className="categoryBookContainer__booksContainer">
        {data.map(book => {
          return <BookItem src={book.imgUrl} alt={book.name} key={book.id} />
        })}
      </div>
    </div>
  )
}
