import React from "react";

interface IconProps {
  color: string;
  onClick?: () => void;
}

const PreviousIcon: React.FC<IconProps> = ({ color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Previous Indicator">
        <path
          id="Rectangle 4"
          d="M13.6286 17.8138C14.1936 18.27 15 17.8359 15 17.0755L15 6.92449C15 6.16405 14.1936 5.72997 13.6286 6.18624L7.34286 11.2617C6.88571 11.6309 6.88571 12.3691 7.34286 12.7383L13.6286 17.8138Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default PreviousIcon;
