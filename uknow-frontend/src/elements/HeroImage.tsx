import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Box } from "@mui/system";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AnimatedText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 3s forwards;
  color: #DEA01E;
`;
const Letter = styled.span<{ animationDelay: string }>`
  margin: 0 6px;
  animation-delay: ${({ animationDelay }) => animationDelay};
`;

export const HeroImage = () => {
  const [showText, setShowText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const animateText = () => {
      if (!isMounted || !imageLoaded) return; // Stop if component is unmounted

      setShowText(""); // Reset the text
      const letters = "UKNOW".split("");
      letters.forEach((letter, index) => {
        setTimeout(() => {
          if (!isMounted) return; // Stop if component is unmounted
          setShowText((prevState) => prevState + letter);
          if (index === letters.length - 1) {
            setTimeout(() => {
              if (!isMounted) return;
              window.location.replace("/home");
            }, 4000); 
          }
        }, index * 700);
      });
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Container>
      <Box  style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <Image src="./hero-image.jpg" alt="Splash" onLoad={handleImageLoad}/>
      
      {showText && (
        <AnimatedText>
          {showText.split("").map((letter, index) => (
            <Letter key={index} animationDelay={`${index * 500}ms`}>
              {letter}
            </Letter>
          ))}
        </AnimatedText>
      )}
      </Box>
    </Container>
  );
};
