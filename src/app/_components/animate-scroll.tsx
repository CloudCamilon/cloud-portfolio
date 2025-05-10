// components/FadeInSection.tsx
import { useEffect } from "react";
import useInView from "../hooks/useInView";

const AnimateScroll = ({
  children,
  onIntersect,
}: {
  children: React.ReactNode;
  onIntersect?: (isIntersecting: boolean) => void;
}) => {
  const { ref, isIntersecting } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (onIntersect) {
      onIntersect(isIntersecting);
    }
  }, [isIntersecting, onIntersect]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-1000 ease-out transform
        ${
          isIntersecting
            ? "opacity-100 translate-y-0 animate-fadeIn"
            : "translate-y-5"
        }
      `}
    >
      {children}
    </div>
  );
};

export default AnimateScroll;
