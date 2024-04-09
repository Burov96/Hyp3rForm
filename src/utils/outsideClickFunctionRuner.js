import { useEffect } from "react";

export function useOutsideClick(ref, callback, exception) {
  let e;
  // Add event listener when the component mounts
  useEffect(() => {
    function handleClickOutside(event) {
      e = event.target;
      // If the click target is outside of the element, call the callback function
      if (!exception?.current.contains(e)) {
        if (ref.current && !ref.current.contains(e)) {
          callback(false);
        } else {
          callback(true);
        }
      }
    }
    // Listen to mouse down events
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

//   TODO:

//    const divRef = useRef(null);

// Use the custom hook to toggle the blur state when clicking outside of the div

// useOutsideClick(divRef, (f) => setBlur(f));
