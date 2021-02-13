import React from "react";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

/**
 * Applies a fade in to individual letters in a string.
 * Motion inspired here: https://tobiasahlin.com/moving-letters/#13
 * @param text The text that we wish to apply a Rising Strong fade in to 
 */
function RisingStrong({ text }) {
  const spanText = [];
  for(let i = 0; i < text.length; i++) {
    spanText.push(<span key={i} style={{display: "inline-block"}} className="letter">{text[i]}</span>)
  }

  return (
    <Anime style={{display: "inline"}} initial={[
      {
        targets: '.rising-strong .letter',
        translateY: ["100px","0px"],
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2400,
        delay: (el, i) => 600 + 60 * i
      }
    ]}>
      <div style={{display: "inline-block"}} className="rising-strong">
        {spanText}
      </div>
    </Anime>
  )
}

export default RisingStrong;