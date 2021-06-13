/* globals window requestAnimationFrame cancelAnimationFrame */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

import { isClient, isTouchDevice } from 'utils';

import { getMouseDistance, showNextImage, lerp } from './utils';

// Credit: Image Trail Effect - Codrops: http://www.codrops.com
// Github: https://github.com/codrops/ImageTrailEffects/blob/master/js/demo.js
// Code has been refactored using modern Javascript

const Container = styled.div`
  pointer-events: none;
`;

const Img = styled.img`
  max-width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: transform;
`;

let animationFrameId;
let imagePosition = 0;
const imagesTotal = 6;
const cacheMousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let mousePos = { x: 0, y: 0 };
let zIndexVal = 1;

const ImageTrail = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const mousemove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mousePos = { x, y };
    };

    const resize = () => {
      imagesRef?.current?.forEach((image) => {
        gsap.set(image, { x: 0, y: 0, scale: 1, opacity: 0 });
      });
    };

    const animateImageTrail = () => {
      const threshold = 100;
      const mouseDistance = getMouseDistance({ mousePos, lastMousePos });

      cacheMousePos.x = lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
      cacheMousePos.y = lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

      if (mouseDistance > threshold) {
        showNextImage({
          imagesRef,
          imagePosition,
          cacheMousePos,
          mousePos,
          zIndexVal,
        });

        zIndexVal += 1;
        imagePosition = imagePosition < imagesTotal - 1 ? imagePosition + 1 : 0;
        lastMousePos = mousePos;
      }

      let isIdle = true;

      imagesRef?.current?.some((img) => {
        const isActive = gsap.isTweening(img) || img.style.opacity !== 0;
        if (isActive) {
          isIdle = false;
        }
        return isActive;
      });

      if (isIdle && zIndexVal !== 1) {
        zIndexVal = 1;
      }

      animationFrameId = requestAnimationFrame(animateImageTrail);
    };

    const throttleResize = throttle(resize, 1000);

    if (isClient() && !isTouchDevice()) {
      animationFrameId = requestAnimationFrame(animateImageTrail);
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('resize', throttleResize);
    }
    return () => {
      throttleResize.cancel();
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('resize', throttleResize);
    };
  }, []);

  return (
    <Container>
      {[...Array(imagesTotal)].map((_, index) => (
        <Img
          key={index}
          ref={(el) => imagesRef.current.push(el)}
          src={`images/cursor-trail/${index + 1}.png`}
          alt=""
        />
      ))}
    </Container>
  );
};

export default ImageTrail;
