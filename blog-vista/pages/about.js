import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/about.module.css';


const about = () => {
  return (

    <div className={styles.container}>
      <Head>
        <title>About | Your Coder Blog</title>
      </Head>
      <header className={styles.header}>
        <h1>About Blog Vista</h1>
      </header>
      <main className={styles.main}>
        {/* <div className={styles.profileImage}>
          <Image src="/aboutimg.jpg" alt="Profile Picture" width={200} height={200} />
        </div> */}
        <div className={styles.aboutContent}>
          <h2>Welcome to Coder Blog Vista!</h2>
          <p>
            At Blog Vista Coder, we are dedicated to providing you with valuable insights, practical tips, and the latest trends in the world of coding. Whether you're a seasoned developer, an aspiring coder, or simply someone curious about the fascinating world of programming, this blog is your go-to destination.

            Our team of passionate coders and tech enthusiasts is committed to delivering high-quality content that covers a wide range of programming languages, frameworks, tools, and best practices. From web development to mobile apps, machine learning to data science, we've got you covered.

            Through our articles, tutorials, and hands-on guides, we aim to simplify complex concepts, making coding accessible to everyone. Whether you're looking to sharpen your coding skills, stay updated with industry news, or explore new technologies, Blog Vista Coder is your reliable companion on this exciting journey.

            We believe in the power of sharing knowledge and fostering a vibrant community of coders. Feel free to engage with us through comments, discussions, and sharing your own experiences. Together, we can learn, grow, and build innovative solutions that shape the future of technology.

            Join us on this coding adventure as we unravel the mysteries of programming and explore the endless possibilities it offers. Whether you're a developer looking to level up your skills or someone curious about the magic behind the apps and websites you use daily, Blog Vista Coder is here to inspire and empower you.

            Thank you for being a part of our community. Let's embark on this exciting coding journey together! Happy coding!
          </p>
          
        </div>
      </main>
    </div>
  );
};

export default about;
