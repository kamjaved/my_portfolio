import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then(data => {
      data.sort((a,b)=>a._updatedAt>b._updatedAt ?-1:1)
      setExperiences(data.sort((a,b)=>b.manner-a.manner));
    });

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  }, []);

  // console.log('EXP', experiences)
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">

        <motion.div className="app__skills-list">
          {skills.map(skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__work-img app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5
                  }}
                  className="app__work-hover app__flex"
                  style={{border: `2px solid ${skill.bgColor}`}}
                >
                  <p className="p-text" style={{fontSize:20}}>{skill.rating}<span style={{fontSize:24}}>/</span>10</p>
                 
                </motion.div>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp ">

          {experiences.map(experience => (
            <motion.div className="app__skills-exp-item " key={experience.year} >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map(work => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
