import { useState } from 'react'
import profilePicture from './assets/profilePic.jpg'
import linkedInLogo from './assets/linkedinlogo.png'
import deloitteOfficePic from './assets/DeloitteOffice.png'
import tradeShowExihibitPic from './assets/tradeShowExihibit.png'
import gameDevScreenshot from './assets/GameDev.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={profilePicture} className="profilePic" alt="Profile Picture" />
        <br/>
        <h1>Jonathan Miller</h1>
        <a href="https://linkedin.com/in/jonathan-m-miller" target="_blank">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="mailto:jmiller3496@gmail.com"><p>JMiller3496@gmail.com</p></a>
        <p className="description">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am an experienced, insightful, and capable software developer with leadership experience and excellent communication skills in both technical and non-technical contexts. I've worked with a variety of different technologies and in many different work environments, including both Agile and Waterfall SDLCs, and both start-ups and large-scale corporations. I'm knowledgeable in Unit Testing and DevOps, and I'm a fast-learner, a self-motivated worker, and a person who's always easy to get along with.
        </p>
      </div>
      <div className="card">
        <h2>Project Highlights</h2>
        <div className="project-details-left">
          <h3>Deloitte & Touche</h3>
          <h4>CyArc Threat Hunt UI</h4>
          <i>NodeJS, Vue, Python, Flask</i>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contributed improvements, bug resolutions, and expansions to a newly developed application intended to act as a hub for Threat Intelligence, Reporting, Alert Management, and Service Requests.</p>
          <h4>Fusion Portal UI</h4>
          <i>Node.js, React, ArangoDB</i>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architected and developed a custom UI to streamline processes for Cyber Analytics employees to find, report, share, and communicate potential threats and malicious activity to their peers and clients.</p>
        </div>
        <div className="project-image-left">
          <img src={deloitteOfficePic} alt="Deloitte Office Exterior" />
        </div>
        <div className="project-details-right">
          <h3>Deeplocal LLC</h3>
          <h4>Trade Show Interactive Exhibit Controller</h4>
          <i>NodeJS, React, Python, Flask</i>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architected and developed an application in a fast-paced environment to act as the connection between several robotic elements within a larger interactive exhibit, to sync the movement of users within an enclosed vehicle through the rooms within an exhibit with the timing of visuals, audio, and olfactory effects, and to ensure the provided segments of music and video looped properly without skipping, even in cases of delays, such as accommodating for users with mobility aids like wheelchairs.</p>
        </div>
        <div className="project-image-right">
          <img src={tradeShowExihibitPic} alt="Trade Show Interactive Exhibit" />
        </div>
        <div className="project-details-left">
          <h3>Current Personal Project(s)</h3>
          <h4>(WIP) 2D Game Engine</h4>
          <i>C#, MonoGame</i>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architected and developed a game engine built overtop of the open-source game framework MonoGame (formerly known as Microsoft Direct X XNA) that allows users to create, edit, and save 2D tile maps with collision and an object hierarchy, alongside simple systems for character movement and object interaction.</p>
        </div>
        <div className="project-image-left">
          <img src={gameDevScreenshot} alt="Simple Game Engine Screenshot" />
        </div>
      </div>
    </>
  )
}

export default App
