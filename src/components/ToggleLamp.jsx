import React from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { useState } from 'react';

/**
 * @todo
 * ubahlah implementasi stateful component dari class ke function
 * dengan memanfaatkan useState().
 */
export default function ToggleLamp() {
  const [lamp, setLamp] = useState('off');
  function toggleLamp() {
    setLamp(lamp === 'off' ? 'on' : 'off');
  }

  return (
    <div className={lamp}>
      <button onClick={toggleLamp}>{lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
      <h1>Hooks keren</h1>
    </div>
  );
}
// class ToggleLamp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lamp: 'off'
//     };

//     this.toggleLamp = this.toggleLamp.bind(this);
//   }

//   toggleLamp() {
//     this.setState((prevState) => {
//       return {
//         lamp: prevState.lamp === 'off' ? 'on' : 'off'
//       };
//     });
//   }

//   render() {
//     return (
//       <div className={this.state.lamp}>
//         <button onClick={this.toggleLamp}>{this.state.lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
//         <h3>Hooks keren!</h3>
//       </div>
//     );
//   }
// }

// export default ToggleLamp;
