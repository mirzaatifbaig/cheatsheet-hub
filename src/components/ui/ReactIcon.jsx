import React from "react";
export function ReactIcon({ className = "h-5 w-5", ...props }) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      {...props}
    >
      <g transform="scale(5.12)">
        <circle cx="25" cy="25" r="4.5" fill="currentColor" />
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse
            rx="11"
            ry="25"
            cx="25"
            cy="25"
            transform="rotate(60 25 25)"
          />
          <ellipse
            rx="11"
            ry="25"
            cx="25"
            cy="25"
            transform="rotate(0 25 25)"
          />
          <ellipse
            rx="11"
            ry="25"
            cx="25"
            cy="25"
            transform="rotate(120 25 25)"
          />
        </g>
      </g>
    </svg>
  );
}
