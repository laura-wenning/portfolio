import React from "react";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

/**
 * Makes text wiggle up and down to give it emphasis. The end goal is to
 * have an animation that makes text move up and down like the 
 * emphasis text from Celeste, but this is a low priority and will be done later. 
 * @param text The text to wiggle about 
 */
function Wiggle({ text }) {
  // TODO - move this into its own function, since it's duplicated between Rising Strong and this.
  const spanText = [];
  for(let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter === " ") {letter = <>&nbsp;</>}
    spanText.push(<span key={i} style={{display: "inline-block"}} className="letter">{letter}</span>)
  }

  return (
    <Anime style={{display: "inline"}} initial={[
      {
        targets: '.wiggle .letter',
        translateY: ["0px", "2px","-2px","0px"],
        duration: 1000,
        easing: "linear",
        delay: (el, i) => 25 * i,
        loop: true
      },
    ]}>
      <div style={{display: "inline-block"}} className="wiggle">
        {spanText}
      </div>
    </Anime>
  )
}

export default Wiggle;