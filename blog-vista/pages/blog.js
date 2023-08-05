
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import fs from 'fs/promises';
import Head from 'next/head';


const Blog = (props) => {
     
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <>
    <Head>
        <title>blogs | Blog Vista</title>
      </Head>
    <div className="container">
    <div className={styles.background}>
      <main className={`${styles.main}`}>
        {blogs.map((blogItem) => (
          <div key={blogItem.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.description}</p>
          </div>
        ))}
      </main>
    </div>
    </div>
    </>
  );
};

export async function getStaticProps(context) {
  const data = await fs.readdir('blogdata');
  const allBlogs = [];

  for (const item of data) {
    const myFile = await fs.readFile(('blogdata/' + item), 'utf-8');
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;