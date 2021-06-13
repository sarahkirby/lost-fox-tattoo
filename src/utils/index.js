/* globals window navigator */
export const isClient = () => typeof window !== 'undefined';

export const isTouchDevice = () =>
  isClient() && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
