import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
const blog = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json()
    })
      .then((parsedData) => {
        setBlogs(parsedData)
      })
  }, [])
  return (
    <div>
      <main className={`${styles.main}`}>
        {blogs.map((blogItem) => {
          return <div key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.description}</p>
          </div>
        })}

      </main>
    </div>
  )
}

export default blog
