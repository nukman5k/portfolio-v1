import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery)
      .then((data) => {
        setExperience(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });

  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experince</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {/* {experience.work.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-work'
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
              </motion.div>
              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.desc}
              </ReactTooltip>
            </>
          ))} */}
        </motion.div>
      </div>
    </>
  )
}

export default Skills