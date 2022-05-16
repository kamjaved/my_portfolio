import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { calcLength, motion } from 'framer-motion';
import {Badge } from 'react-bootstrap';

import noImage from '../../assets/about02.png'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import ProjectModal from '../../components/ProjectModal';

const Work = () => {

  const workList=['NodeJS', 'NestJS', 'ReactJS', 'All']

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState(null);

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then(data => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // console.log("FILTER WORK", filterWork)

  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      {' '}
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">

        {workList.map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

{/* MODAL  */}
     <ProjectModal show={show} onHide={handleClose} data={modalData} />
 

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >



        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}  onClick={()=>{setModalData(work); setShow(true)}}>
          
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5
                }}
                // OnClick Model Open
                onClick={()=>{setModalData(work); setShow(true)}}
                className="app__work-hover app__flex"
              >
               
              </motion.div>

            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                { work.description.substring(0, 90)}
              </p>

              <div className="app__work-tag app__flex">
              <Badge pill bg="dark"> {work.company}</Badge></div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'),'work','app__primarybg');
