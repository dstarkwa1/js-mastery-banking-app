import React from 'react'

const Category = ({category}: CategoryProps) => {
  return (
    <div>{category.totalCount}</div>
  )
}

export default Category