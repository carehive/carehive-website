import React from "react";
import tw from "twin.macro";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from "use-in-view";

const StyledDiv = tw.div`font-display  text-secondary-500 overflow-hidden`; //min-h-screen
function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const [ref, inView] = useInView(50);

  const x = { target: "0%" };

  if (direction === "left") x.initial = "-100%";
  else x.initial = "100%";

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{ x: '0%' }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {children}
    </motion.section>
  );
}

export default props => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
/*
initial={{ x: x.initial }}
      animate={{ 
        x: inView && x.target,
        transitionEnd:{
          x: inView && 0
        }
      }}
      transition={{ type: "spring", damping: 10 }}
      ref={ref}

*/