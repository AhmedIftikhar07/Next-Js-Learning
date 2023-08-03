import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'


const Slug = () => {
  
  const [blog, setBlog] = useState([])

  const router = useRouter()
    useEffect(()=>{
    if(!router.isReady) return;
    const {slug} = router.query;
    
      
      fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((a) => {
      return a.json()
      
    })
      .then((parsedData) => {
        setBlog(parsedData)
        console.log(parsedData);
      })
      
    },[router.isReady])
    

    // Access the title and content of the first object in the "chapters" array

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
