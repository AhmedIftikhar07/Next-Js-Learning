import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// import Dummy from '@/components/Dummy'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <style jsx>
      {`
        h2{
          font-size: 30px;
        }
      `}
    </style>
      <Head>
        <title>Blog Vista</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextjx, blog vista, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        {/* <Dummy></Dummy> */}

        {/* <Script src='' strategy='lazyOnLoad'></Script> */}
        

        <main className={`${styles.main}`}>


          <div className={styles.main}>
            {/* <span className='myspan dummy'> */}

            <h1>Blog Vista</h1>

            {/* </span> */}

          <Image className={styles.myImg} src="/homeImg.jpg" width={237} height={158}/>

            <p>A blog for hunting coders by blog vista</p>
          </div>


          <div>
            <h2>Latest Blogs</h2>
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
      </div>
    </>
  )
  }
