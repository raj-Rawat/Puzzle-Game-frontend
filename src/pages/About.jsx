import React from 'react'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card className="text-center fs-3">
    <Card.Header>About</Card.Header>
    <Card.Body>
      <Card.Title>Puzzle-Game</Card.Title>
      <Card.Text style={{fontFamily: "Lucida Console Courier New monospace" , }} className='container '>
       <p> Our puzzle is simple yet challenging, and it involves finding hidden clues and treasures by following a trail of clues. Each clue will lead you to the next one, and the final clue will lead you to the treasure. The clues can be in the form of simple text, videos, 3D animations, games, links, or anything else that you have to find or solve.</p>
        We have designed the clues to test specific soft skills, and by solving each one, you will demonstrate your proficiency in that particular skill. You can expect to encounter a variety of challenges that will require you to think outside the box and be creative in your approach.
        Our website is easy to navigate and user-friendly, with clear instructions on how to play the game and how to progress through the clues. We have also included clues that may lead you outside of our website, such as to an Instagram post or a YouTube video, so be prepared to explore beyond our website.
        We hope that you enjoy playing our interactive puzzle and that it helps you develop and showcase your soft skills.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted"> Good luck on your treasure hunt   ~ Abhishek Rawat</Card.Footer>
  </Card>
  )
}

export default About