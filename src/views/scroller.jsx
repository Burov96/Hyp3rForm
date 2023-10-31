import React, { useState, useEffect } from 'react';


  export const scrollToPercentage = (percentage) => {
    const windowHeight = window.innerHeight;
    const scrollPosition = (percentage / 100) * windowHeight;

    // Save the current scroll position
    setSavedScrollPosition(window.scrollY);

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  };

  export const restoreScrollPosition = () => {
    // Restore the saved scroll position
    window.scrollTo({
      top: savedScrollPosition,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
    setSavedScrollPosition(null)
  };
