import { useEffect } from "react";

function useClickOutside(
  ref: any,
  handler: (e: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

export default useClickOutside;
