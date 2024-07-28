import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
}

const Counter: React.FC<CounterProps> = ({ from, to }) => {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 3,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <span ref={nodeRef} />;
};

export default Counter;