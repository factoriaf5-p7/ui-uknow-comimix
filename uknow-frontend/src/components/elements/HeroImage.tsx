import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


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

const buttonFadeIn = keyframes`
  0% {
    opacity: 0;
    background-color: transparent;
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

const HeroContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AnimatedText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  opacity: 0;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 3s forwards;
  color:#DBF2FF ;
  margin-bottom: 40px; /* Increase the time gap between the text and the button */
`;

const Letter = styled.span<{ animationDelay: string }>`
  margin: 0 6px;
  animation-delay: ${({ animationDelay }) => animationDelay};
`;

const StyledButton = styled(Button)`
  font-size: 1.6rem; 
  padding: 10px 20px; 
  animation: ${buttonFadeIn} 2s forwards;
  background-color: #DEA01E
`;

export const HeroImage = () => {
  const [showText, setShowText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const animateText = () => {
      if (!isMounted || !imageLoaded) return; 

      setShowText(""); // Reset the text
      const letters = "U,KNOW".split("");
      letters.forEach((letter, index) => {
        setTimeout(() => {
          if (!isMounted) return; 
          setShowText((prevState) => prevState + letter);
          if (index === letters.length - 1) {
            setTimeout(() => {
              if (!isMounted) return;
              setShowButton(true); 
            }, 2000); 
          }
        }, index * 700);
      });
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [imageLoaded]);
 const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <Container sx={{padding: '0'}}>
      <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <Image src="src/assets/hero-image.jpg" alt="Splash" onLoad={handleImageLoad} />
        <HeroContent>
          <Box>
            {showText !== "" && (
              <AnimatedText>
                {showText.split("").map((letter, index) => (
                  <Letter key={index} animationDelay={`${index * 500}ms`}>
                    {letter}
                  </Letter>
                ))}
              </AnimatedText>
            )}
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            {showButton && (
              <StyledButton variant="contained" color="primary" onClick={handleButtonClick}>
                Accede Al Conocimiento
              </StyledButton>
            )}
          </Box>
        </HeroContent>
      </Box>
    </Container>
  );
};