import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
const blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs)

  // useEffect(() => {
    
  // }, [])
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

export async function getServerSideProps(){
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  
  // .then((a) => {
  //     return a.json()
  //   })
  //     .then((parsedData) => {
  //       setBlogs(parsedData)
  //     })
  return{
    props: {allBlogs}
  }
}

export default blog
