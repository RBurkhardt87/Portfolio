import React from 'react'

const WishList = () => {
  return (
    <div>
      <h1>Wish List Application</h1>
      <br/>
        <p>Post pictures of the project</p>
        <br/>
        <ul>
            <li>Wireframe/Layout</li>
            <li>Pics of each Page</li>
            <li>Forms</li>
            <li>Features</li>
            <li>MySQL database tables</li>
        </ul>
        <br />
        <p>Give some background information about it</p>
        <br />
        <ul>
        <li>What the app does</li>
        <li>Why build it</li>
        <li>Tech Stack Used</li>
        <li>Future Improvements</li>
        <li>Link Slide Deck (if there is one)</li>
        <li>Link GitHub Repo </li>
        <li>Link video of project run thru</li>
        <li>Link Deployment (if it is deployed)</li>
        <br />
        <li>Back to <a href="/projects">Project List</a></li>
        </ul>
    </div>
  )
}

export default WishList
