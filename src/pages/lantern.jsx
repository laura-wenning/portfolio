import React from "react";
import Page from "../components/Page";

function LanternDemo() {
  return (
    <Page>
      <iframe src="http://192.168.0.195:3000/embed/character-sheet" style={{width: "90%", height: "50vh"}}/>
    </Page>
  )
}

export default LanternDemo;
