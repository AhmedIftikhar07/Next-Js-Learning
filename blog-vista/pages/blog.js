import React from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
const blog = () => {
  return (
    <div>
      <main className={`${styles.main}`}>
      <div>
            <div className="blogItem">
              <Link href='/blogpost/learn-javascript'>
              <h3>How to learn JavaScript in 2023?</h3>
              </Link>
              <p>JavaScript is the language used to design logics for the web</p>
            </div>
            <div className="blogItem">
              <h3>How to learn JavaScript in 2023?</h3>
              <p>JavaScript is the language used to design logics for the web</p>
            </div>
            <div className="blogItem">
              <h3>How to learn JavaScript in 2023?</h3>
              <p>JavaScript is the language used to design logics for the web</p>
            </div>
          </div>
          </main>
    </div>
  )
}

export default blog
