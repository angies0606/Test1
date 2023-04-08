import { useMediaQuery } from 'react-responsive';

const breakpoint1 = 1224;
// const breakpoint2 = 680;

export function useMedia () {
  const isLaptop = useMediaQuery({ query: `(min-width: ${breakpoint1 + 1}px)` });
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoint1}px)`});
  // const isTablet = useMediaQuery({ query: `(max-width: ${breakpoint1}px) and (min-width: ${breakpoint2 + 1}px)`});
  // const isMobile = useMediaQuery({ query: `(max-width: ${breakpoint2}px)` });
  return {
    isLaptop,
    // isTablet,
    isMobile
  }
}