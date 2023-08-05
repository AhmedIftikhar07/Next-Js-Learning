import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/contact.module.css';

const contact = () => {

  const [name, setName]= useState('');
  const [phone, setPhone]= useState('');
  const [email, setEmail]= useState('');
  const [desc, setDesc]= useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()

    const data = {name,phone,email,desc};

    fetch('http://localhost:3000/api/postContact/',{
      method: 'POST',
      Headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response=> response.text())
    .then(data=>{
      console.log('Success',data);
      setName('')
      setEmail('')
      setPhone('')
      setDesc('')
    })
    .catch(err=>{
      console.log('Error',err);
    })
  }

  const handleChange = (e)=>{
    

    if(e.target.name === 'name'){
      setName(e.target.value)
    }
    else if(e.target.name === 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value)
    }
  }
  return (
    <>
   
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact | Blog Vista</title>
      </Head>
      <div className={styles.contactContent}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Feel free to reach out!</p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={handleChange} id="name" name="name" placeholder="Your Name" />

          <label htmlFor="phone">Phone</label>
          <input type="number" value={phone} onChange={handleChange} id="phone" name="phone" placeholder="Your phone" />

          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={handleChange} id="email" name="email" placeholder="Your Email" />

          <label htmlFor="description">Description</label>
          <textarea id="description"  onChange={handleChange} name="desc" rows="4" placeholder="description" value={desc}/>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default contact;