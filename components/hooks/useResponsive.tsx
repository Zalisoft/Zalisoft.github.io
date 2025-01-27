import { useEffect, useRef, useState } from "react";

export type BreakPoint = "sm" | "md" | "lg" | "xl" | "xxl";
export type ResponsiveState = Partial<Record<BreakPoint, boolean>>;
function useResponsive({ watchPoints = [] }: { watchPoints?: BreakPoint[] }) {
  const initComplete = useRef(false);
  // Used ref to save the last state because event listeners don't get updated state values but get updated refs
  const lastState = useRef<ResponsiveState>({});
  const [state, setState] = useState<ResponsiveState>({});

  function handleResize() {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    // console.log("initComplete", initComplete.current);
    // console.log("sm included", watchPoints.includes("sm"));
    // console.log("md included", watchPoints.includes("md"));
    // console.log("lg included", watchPoints.includes("lg"));
    // console.log("xl included", watchPoints.includes("xl"));
    // console.log("xxl included", watchPoints.includes("xxl"));
    if (!initComplete.current || watchPoints.includes("sm")) {
      if (windowSize.width >= 640) {
        // console.log("last state sm", lastState.current.sm);
        if (lastState.current.sm != true) {
          setState({ ...lastState.current, sm: true });
          lastState.current = { ...lastState.current, sm: true };
          // console.log("sm updated");
        }
      } else {
        // console.log("last state sm", lastState.current.sm);
        if (lastState.current.sm != false) {
          setState({ ...lastState.current, sm: false });
          lastState.current = { ...lastState.current, sm: false };
          // console.log("sm updated");
        }
      }
    }
    if (!initComplete.current || watchPoints.includes("md")) {
      if (windowSize.width >= 768) {
        if (lastState.current.md != true) {
          setState({ ...lastState.current, md: true });
          lastState.current = { ...lastState.current, md: true };
          // console.log("md updated");
        }
      } else {
        if (lastState.current.md != false) {
          setState({ ...lastState.current, md: false });
          lastState.current = { ...lastState.current, md: false };
          // console.log("md updated");
        }
      }
    }
    if (!initComplete.current || watchPoints.includes("lg")) {
      if (windowSize.width >= 1024) {
        if (lastState.current.lg != true) {
          setState({ ...lastState.current, lg: true });
          lastState.current = { ...lastState.current, lg: true };
          // console.log("lg updated");
        }
      } else {
        if (lastState.current.lg != false) {
          setState({ ...lastState.current, lg: false });
          lastState.current = { ...lastState.current, lg: false };
          // console.log("lg updated");
        }
      }
    }
    if (!initComplete.current || watchPoints.includes("xl")) {
      if (windowSize.width >= 1280) {
        if (lastState.current.xl != true) {
          setState({ ...lastState.current, xl: true });
          lastState.current = { ...lastState.current, xl: true };
          // console.log("xl updated");
        }
      } else {
        if (lastState.current.xl != false) {
          setState({ ...lastState.current, xl: false });
          lastState.current = { ...lastState.current, xl: false };
          // console.log("xl updated");
        }
      }
    }
    if (!initComplete.current || watchPoints.includes("xxl")) {
      if (windowSize.width >= 1536) {
        if (lastState.current.xxl != true) {
          setState({ ...lastState.current, xxl: true });
          lastState.current = { ...lastState.current, xxl: true };
          // console.log("xxl updated");
        }
      } else {
        if (lastState.current.xxl != false) {
          setState({ ...lastState.current, xxl: false });
          lastState.current = { ...lastState.current, xxl: false };
          // console.log("xxl updated");
        }
      }
    }
  }

  useEffect(() => {
    if (watchPoints.length > 0) window.addEventListener("resize", handleResize);
    handleResize();
    initComplete.current = true;
    if (watchPoints.length > 0)
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state;
}

export default useResponsive;
