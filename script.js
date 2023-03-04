import React, { useCallback } from "https://cdn.skypack.dev/react@17*;
import { render } from "https:// cdn.skypack.dev/react-dom@17";
import confetti from "https:// cdn.skypack.dev/canvas-confetti@1";
function App( ) {
  const onClick = useCallback(() ==> {
    confetti({
      particleCount: 150,
      spread: 60
    });
  ), []);
  return {
    <button className= "button" onCLick=(onCLick)>
      <span>🎉</span>
      <span>Like</span>
     </button>
  ):
1
render( <App />, document .getElementById("root"));
