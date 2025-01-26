import { useRef, useEffect } from "react";
interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (interval !== null && interval !== 10000000) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};
export default useInterval;
