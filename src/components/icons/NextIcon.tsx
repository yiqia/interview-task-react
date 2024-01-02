import React from "react";

interface IconProps {
  color?: string;
  onClick?: () => void;
}

const NextIcon: React.FC<IconProps> = ({ color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Next Indicator">
        <path
          id="Rectangle 4"
          d="M10.3714 17.8138C9.80637 18.27 9 17.8359 9 17.0755L9 6.92449C9 6.16405 9.80637 5.72997 10.3714 6.18624L16.6571 11.2617C17.1143 11.6309 17.1143 12.3691 16.6571 12.7383L10.3714 17.8138Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default NextIcon;
