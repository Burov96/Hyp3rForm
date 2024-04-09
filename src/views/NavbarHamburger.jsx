import { DotLottiePlayer } from "@dotlottie/react-player";
import React, { useRef,} from "react";

function Hamburger() {
  const lottieRef = useRef();



  return (
    <div className=" -mr-2 block md:hidden z-50 relative ">
      <DotLottiePlayer
        src="/hamburger.lottie"
        autoplay={false}
        loop={false}
        ref={lottieRef}
        style={{
          width: "100%",
          maxWidth: "75px",
          height: "auto",
          marginRight: "10px",
          fill: open ? "#5CCCD6" : "#FB8B49",
          stroke: open ? "#5CCCD6" : "#FB8B49",
        }}
      />
  </div>
    );
}

export default Hamburger;
