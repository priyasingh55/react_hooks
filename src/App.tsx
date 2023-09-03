import * as React from 'react';
import Exp_useState from './Hooks/Exp_usestate';
import './style.css';
import Count from "./Hooks/Example_usestate";
import Resource from "./Hooks/Exp_useeffect";
import EXp_usestatememo from './Hooks/Exp_usestatememo';

export default function App() {
  return (
    <div>
      
      {/* <Exp_useState /> */}
      <Count />
      {/* <Resource /> */}
      {/* <EXp_usestatememo /> */}
      
    </div>
  );
}
