import { gsap, Expo, Power1, Quint } from 'gsap';

export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

export const getMouseDistance = ({ mousePos, lastMousePos }) =>
  distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

export const showNextImage = ({
  imagesRef,
  imagePosition,
  cacheMousePos,
  mousePos,
  zIndexVal,
}) => {
  const image = imagesRef?.current?.[imagePosition];
  const imageSize = image?.getBoundingClientRect();

  // kill any tween on the image
  gsap.killTweensOf(image);

  const timeline = gsap.timeline();
  // show the image
  timeline
    .set(
      image,
      {
        startAt: { opacity: 0, scale: 1 },
        opacity: 1,
        scale: 1,
        zIndex: zIndexVal,
        x: cacheMousePos.x - imageSize.width / 2,
        y: cacheMousePos.y - imageSize.height / 2,
      },
      0
    )
    // animate position
    .to(
      image,
      {
        duration: 0.9,
        ease: Expo.easeOut,
        x: mousePos.x - imageSize.width / 2,
        y: mousePos.y - imageSize.height / 2,
      },
      0
    )
    // then make it disappear
    .to(image, { duration: 1, ease: Power1.easeOut, opacity: 0 }, 0.4)
    // scale down the image
    .to(image, { duration: 1, ease: Quint.easeOut, scale: 0.2 }, 0.4);
};
