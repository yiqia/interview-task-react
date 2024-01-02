import React, { useState, useRef, useEffect } from "react";

export type Direction = "top" | "right" | "bottom" | "left";
export type Align = "left" | "right";

export interface PopupProps {
  visible?: boolean;
  content: React.ReactNode;
  direction?: Direction;
  align?: Align;
  children: React.ReactNode;
}

const directionStyles: Record<Direction, Record<Align, React.CSSProperties>> = {
  top: {
    left: { position: "absolute", bottom: "120%", left: 0 },
    right: { position: "absolute", bottom: "120%", right: 0 },
  },
  right: {
    left: { position: "absolute", top: 0, left: "120%" },
    right: { position: "absolute", top: 0, left: "120%" },
  },
  bottom: {
    left: { position: "absolute", top: "120%", left: 0 },
    right: { position: "absolute", top: "120%", right: 0 },
  },
  left: {
    left: { position: "absolute", top: 0, right: "120%" },
    right: { position: "absolute", top: 0, right: "120%" },
  },
};

const Popup: React.FC<PopupProps> = ({
  visible,
  content,
  direction = "bottom",
  align = "left",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !(wrapperRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const getPopupStyle = () => {
    return (
      directionStyles[direction]?.[align] ||
      directionStyles.bottom[align] ||
      directionStyles.bottom.left
    );
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {(visible !== undefined ? visible : isOpen) && (
        <div style={getPopupStyle()}>{content}</div>
      )}
    </div>
  );
};

export default Popup;
