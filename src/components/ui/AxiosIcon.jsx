import React from "react";
function AxiosIcon({ size = 32, color = "#FFFFFF", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Axios logo"
      {...props}
    >
      <path
        d="M10 10L40 50L10 90H30L50 60L70 90H90L60 50L90 10H70L50 40L30 10H10Z"
        fill={color}
      />
    </svg>
  );
}
export default AxiosIcon;
