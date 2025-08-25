import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='fix-height flex justify-center items-center flex-col'>
      <h3>404</h3>
      <p>Page Not Found</p>
       <Link href="/" className="text-xl  hover:bg-purple-200 ">
                go to home page
                </Link>
    </div>
  )
}

export default NotFoundPage
