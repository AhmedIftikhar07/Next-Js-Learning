import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
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



export async function getStaticProps(context){
  let data = await fs.promises.readdir("blogdata")
  let myFile; 
  let allBlogs = [];
  for(let index = 0; index< data.length; index++){
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return{
    props: {allBlogs}
  }
}

export default blog
