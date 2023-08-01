import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Vista</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextjx, blog vista, hunting coder"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.body}>
        
      
      {/* <Script src='' strategy='lazyOnLoad'></Script> */}
      <nav className={styles.mainNav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={`${styles.main}`}>
        

        <div className={styles.main}>
          <h1>Blog Vista</h1>
          <p>A blog for hunting coders by blog vista</p>
        </div>


        <div className="blogs">
          <h2>Popular Blogs</h2>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2023?</h3>
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
      </body>
    </>
  )
}
