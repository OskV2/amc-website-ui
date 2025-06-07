import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Counter= ({ from, to }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
      const node = nodeRef.current;
  
      if (!node) return; // Ensure the node exists before using it

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