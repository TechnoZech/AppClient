import React from 'react'
import Section2 from './Section2';
import OurStory from './OurStory';
import WhySenior from './WhySenior';
import Courses from './Courses';
import Hero from './Hero';

const Home = (props) => {
  return (
    <>
        <Hero theme={props.theme}/>
        <Section2/>
        <OurStory/>
        <WhySenior/>
        <Courses/>
    </>
  )
}

export default Home