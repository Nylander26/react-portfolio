import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND DEVELOPMENT */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience