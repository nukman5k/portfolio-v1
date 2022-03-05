import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {
    title: 'Web Development',
    description: 'I am a good developer',
    imgUrl: ''
  },
  {
    title: 'Web Design',
    description: 'I am a good developer',
    imgUrl: ''
  },
  {
    title: 'UI/UX',
    description: 'I am a good developer',
    imgUrl: ''
  },
  {
    title: 'Web Animation',
    description: 'I am a good developer',
    imgUrl: ''
  }];



const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I kNow That
        <span>Good design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 11 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About