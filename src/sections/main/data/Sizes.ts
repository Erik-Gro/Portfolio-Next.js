import { useMemo } from 'react';

export const useCalculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
  return useMemo(() => {
    return {
      deskScale: isSmall ? 1.75 : isMobile ? 1.76 : 1.765,
      deskPosition: (isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0]) as [number, number, number],
      cubePosition: (isSmall ? [3, -7, 0] : isMobile ? [6, -5, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0]) as [number, number, number],
      reactLogoPosition: (isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0]) as [number, number, number],
      reactLogoScale: ([0.3,0.3,0.3] as [number, number, number]),
      ringPosition: (isSmall ? [-5, 7, 0] : isMobile ? [-10, 8, 0] : isTablet ? [-12, 7, 0] : [-24, 10, 0]) as [number, number, number],
      targetPosition: (isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -13, -10] : [-13, -13, -10]) as [number, number, number],
      pythonPosition: (isSmall ? [-11, 4, -39] : isMobile ? [-13, -7, -39] : isTablet ? [-13, -7, -39] : [-20, -7, -39]) as [number, number, number],
      macBookPosition: (isSmall ? [1, -5.5, 20] : isMobile ? [1, -5.5, 20] : [1.5, -5.5, 20]) as [number, number, number],
    };
  }, [isSmall, isMobile, isTablet]);
};

export default useCalculateSizes;
