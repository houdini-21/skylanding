import {
  LeftParallax,
  RightParallax,
  CenterParallax,
} from "./components/Parallax";
import "./App.css";

const App = () => {
  return (
    <>
      <CenterParallax text="DESIGNING HUMANITY'S FUTURE INTERPLANETARY LIVING STRUCTURES" />
      <RightParallax
        text="We are a space architecture and engineering company. Our team of professional designers and engineers utilize our patented technology to build humanity's future interplanetary living"
        title="OUR MISSION"
      />
      <LeftParallax
        text="From high-tech design, structural engineering, and the use of space composite materials, we specialize in the design and construction of interplanetary living structures to house our future human explorers."
        title="TECHNOLOGY"
      />
      <RightParallax
        text="Our mission is to build safer and structurally sound interplanetary structures, designed to protect and house our next human explorers. Our space architects and designers take pride in our experience and professionalism to accomplish our mission."
        title="PHILOSOPHY"
      />
      <LeftParallax
        text="We value our team effort to make this vision of interplanetary living a reality. Our partners and clients are our cornerstone. We will continue to push the boundaries of space technology for humanity to enjoy"
        title="INNOVATION"
      />
      <RightParallax
        text="Our mission is to look beyond and pursue the impossible. Skyeports patented space high-tech technology will assist our future space explorers to achieve the unthinkable."
        title="SPACE RESOURCES"
      />
    </>
  );
};

export default App;
