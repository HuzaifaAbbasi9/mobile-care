import React from "react";

const SvgIcons = ({ type, ...rest }) => {
  switch (type) {
    case "tagIcon":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_273_1891"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask0_273_1891)">
            <path
              d="M12.75 20.1L3.90002 10.35L4.65002 3.75H11.25L19.95 13.5L12.75 20.1ZM6.00002 9.75L12.9 17.4L17.4 13.5L10.5 5.85H6.45002L6.00002 9.75Z"
              fill="currentColor"
            />
            <path
              d="M8.24998 8.70003C8.74703 8.70003 9.14997 8.29708 9.14997 7.80002C9.14997 7.30297 8.74703 6.90002 8.24998 6.90002C7.75292 6.90002 7.34998 7.30297 7.34998 7.80002C7.34998 8.29708 7.75292 8.70003 8.24998 8.70003Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "achievementIcon":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_273_1902"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask0_273_1902)">
            <path
              d="M15.2 12L19.2 16H16.1V19.1L12 14.9L7.80005 19V16H4.80005L8.80005 12L4.80005 8.00002H7.90005V4.90002L12 9.10002L16.1 5.00002V8.00002H19.2L15.2 12Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "settingsIcon":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_273_1911"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask0_273_1911)">
            <path
              d="M20.7001 10.8V8.90002H15.2V11H3.30005V13H15.2V15.1H20.7001V13.2H17.1V10.8H20.7001Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "navigationBarIcon1":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_273_1996"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask0_273_1996)">
            <path
              d="M12 10.3C9.89995 10.3 8.19995 8.59995 8.19995 6.49995C8.19995 4.39995 9.89995 2.69995 12 2.69995C14.1 2.69995 15.8 4.39995 15.8 6.49995C15.8 8.59995 14.1 10.3 12 10.3ZM12 4.69995C11 4.69995 10.2 5.49995 10.2 6.49995C10.2 7.49995 11 8.29995 12 8.29995C13 8.29995 13.8 7.49995 13.8 6.49995C13.8 5.49995 13 4.69995 12 4.69995Z"
              fill="currentColor"
            />
            <path
              d="M14.4 10.7V10.8L12 13.2L9.59995 10.8V10.7H4.19995V21.3H6.19995V19.3V12.7H8.79995L12 15.9L14.4 13.5L15.2 12.7H17.8V19.3V21.3H19.8V10.7H14.4Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "navigationBarIcon2":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_273_2004"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask0_273_2004)">
            <path
              d="M12 20.2001L1.5 9.70005L7.3 3.90005L12 8.50005L16.7 3.80005L22.5 9.60005L12 20.2001ZM4.2 9.70005L12 17.5L19.8 9.70005L16.7 6.60005L12 11.3L7.3 6.60005L4.2 9.70005Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "navigationBarIcon3":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M16.6008 7.20005C16.5008 4.80005 14.5008 2.80005 12.0008 2.80005C9.50078 2.80005 7.50078 4.80005 7.40078 7.20005H4.30078V21.2001H19.7008V7.20005H16.6008ZM12.0008 4.70005C13.4008 4.70005 14.6008 5.80005 14.7008 7.20005H9.30078C9.40078 5.80005 10.6008 4.70005 12.0008 4.70005ZM17.8008 19.3H6.20078V9.10005H17.7008V19.3H17.8008Z"
            fill="currentColor"
          />
        </svg>
      );
    case "bars":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <mask
            id="mask0_297_1961"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_297_1961)">
            <path
              d="M19.7001 11H4.20007V12.9H19.7001V11Z"
              fill="currentColor"
            />
            <path
              d="M19.7001 16.3H7.80007V18.2H19.7001V16.3Z"
              fill="currentColor"
            />
            <path
              d="M19.7001 5.80005H6.60007V7.70005H19.7001V5.80005Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <g clip-path="url(#clip0_297_2014)">
            <mask
              id="mask0_297_2014"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_297_2014)">
              <path
                d="M10.2 16.6C6.70005 16.6 3.80005 13.7 3.80005 10.2C3.80005 6.70005 6.70005 3.80005 10.2 3.80005C13.7 3.80005 16.6 6.70005 16.6 10.2C16.6 13.7 13.7 16.6 10.2 16.6ZM10.2 5.70005C7.70005 5.70005 5.70005 7.70005 5.70005 10.2C5.70005 12.7 7.70005 14.7 10.2 14.7C12.7 14.7 14.7 12.7 14.7 10.2C14.7 7.70005 12.7 5.70005 10.2 5.70005Z"
                fill="currentColor"
              />
              <path
                d="M16.3257 15.0614L14.9822 16.4049L18.8712 20.294L20.2147 18.9505L16.3257 15.0614Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_297_2014">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return <></>;
  }
};

export { SvgIcons };
