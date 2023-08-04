import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'
import * as fs from 'fs'

export async function getStaticProps(context) {
  console.log(context);
  const { slug } = context.params

  let myBlogs =await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8') 
  

  return {
    props: { myBlogs: JSON.parse(myBlogs) }
  }
}


export async function getStaticPaths(){
  return {
    paths:[
      {params: {slug: 'how-to-learn-javaScript'}},
      {params: {slug: 'how-to-learn-nextjs'}},
      {params: {slug: 'how-to-learn-reactjs'}},
      {params: {slug: 'how-to-learn-python'}},
    ],
    fallback: 'blocking'
  }
}

const Slug = (props) => {
  console.log(props);
  const [blog, setBlog] = useState(props.myBlogs)

  return (
    <div>
      <header className={styles.header}>
        <h1>{blog && blog.title}</h1>
      </header>

      <div>
        {blog.chapters &&
          blog.chapters.map((chapter, index) => (
            <div key={index}>
              <h3>{chapter.title}</h3>
              <p>{chapter.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Slug
