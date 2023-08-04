import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'


export async function getServerSideProps(context) {
  console.log(context.query);
  const { slug } = context.query
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  let myBlogs = await data.json()

  return {
    props: { myBlogs }
  }
}

const Slug = (props) => {
  console.log(props);
  const [blog, setBlog] = useState(props.myBlogs)
  // useEffect(()=>{
  // if(!router.isReady) return;

  //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((a) => {
  //   return a.json()

  // })
  //   .then((parsedData) => {
  //     setBlog(parsedData)
  //     console.log(parsedData);
  //   })

  // },[router.isReady])
  return (
    <div>
      <header className={styles.header}>
        <h1>{blog && blog.title}</h1>
      </header>

      <div>
        {blog.chapters &&
          blog.chapters.map((chapter, index) => (
            <div key={index}>
              <h2>{chapter.title}</h2>
              <p>{chapter.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Slug
