import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css'


const Slug = () => {
    const router = useRouter()
    const {slug} = router.query;

  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <h1>{slug}</h1>
      </header>
      <main className={styles.main}>

        <div className={styles.aboutContent}>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ipsa velit nesciunt consequatur animi corporis iure voluptatem recusandae sequi omnis facilis ad autem, porro hic nihil, quos nam. Quis, libero?</p>            
        </div>
      </main>
      
    </div>
  
)}

export default Slug
