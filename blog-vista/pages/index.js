import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


// import Dummy from '@/components/Dummy'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let heading = '<BlogVista/>'
  return (
    <>
    <div className={styles.maincontainer}>
    <Head>
      <title>Blog Vista</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="nextjx, blog vista, hunting coder" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
      <main>
        <div className={styles.header}>
          <h1>{heading}</h1>
          <p>Blog Vista: Your Window to a World of Ideas and Inspiration</p>
        </div>

        <div className={styles.latestBlog}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2023?</h3>
            <p>Embark on a Journey to JavaScript Mastery in 2023</p>
            <Link href='/blog'><span>More&rarr;</span></Link>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn React Js in 2023?</h3>
            <p>Embark on a Journey to React Mastery in 2023</p>
            <Link href='/blog'><span>More&rarr;</span></Link>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Next Js in 2023?</h3>
            <p>Embark on a Journey to Next Mastery in 2023</p>
            <Link href='/blog'><span>More&rarr;</span></Link>
          </div>
        </div>
      </main>
    </div>

  </>
  )
      }
