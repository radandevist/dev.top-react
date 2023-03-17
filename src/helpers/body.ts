export const preventScroll = (state: boolean) => {
  document.body.style.overflowY = state ? 'hidden' : 'scroll';
};
