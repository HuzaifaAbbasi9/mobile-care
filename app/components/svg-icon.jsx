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
          <g clipPath="url(#clip0_297_2014)">
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
    case "close":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="currentColor"
          />
        </svg>
      );
    case "arrow-right":
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
            d="M8.20039 20.0999L6.90039 18.6999L14.3004 11.9999L6.90039 5.2999L8.20039 3.8999L17.1004 11.9999L8.20039 20.0999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      );
    case "social-icon-1":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path d="M32 0.00012207H0V32.0001H32V0.00012207Z" fill="#6A4EF5" />
          <path
            d="M24 16.0001C24 11.6001 20.4 8.00012 16 8.00012C11.6 8.00012 8 11.6001 8 16.0001C8 20.0001 10.9 23.3001 14.7 23.9001V18.3001H12.7V16.0001H14.7V14.2001C14.7 12.2001 15.9 11.1001 17.7 11.1001C18.6 11.1001 19.5 11.3001 19.5 11.3001V13.3001H18.5C17.5 13.3001 17.2 13.9001 17.2 14.5001V16.0001H19.4L19 18.3001H17.1V24.0001C21.1 23.4001 24 20.0001 24 16.0001Z"
            fill="white"
          />
        </svg>
      );
    case "social-icon-2":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path d="M32 0.00012207H0V32.0001H32V0.00012207Z" fill="#6A4EF5" />
          <path
            d="M16 9.20013C18.2 9.20013 18.5 9.20013 19.4 9.20013C20.2 9.20013 20.6 9.40013 20.9 9.50013C21.3 9.70013 21.6 9.80013 21.9 10.1001C22.2 10.4001 22.4 10.7001 22.5 11.1001C22.6 11.4001 22.7 11.8001 22.8 12.6001C22.8 13.5001 22.8 13.7001 22.8 16.0001C22.8 18.3001 22.8 18.5001 22.8 19.4001C22.8 20.2001 22.6 20.6001 22.5 20.9001C22.3 21.3001 22.2 21.6001 21.9 21.9001C21.6 22.2001 21.3 22.4001 20.9 22.5001C20.6 22.6001 20.2 22.7001 19.4 22.8001C18.5 22.8001 18.3 22.8001 16 22.8001C13.7 22.8001 13.5 22.8001 12.6 22.8001C11.8 22.8001 11.4 22.6001 11.1 22.5001C10.7 22.3001 10.4 22.2001 10.1 21.9001C9.80001 21.6001 9.60001 21.3001 9.50001 20.9001C9.40001 20.6001 9.30001 20.2001 9.20001 19.4001C9.20001 18.5001 9.20001 18.3001 9.20001 16.0001C9.20001 13.7001 9.20001 13.5001 9.20001 12.6001C9.20001 11.8001 9.40001 11.4001 9.50001 11.1001C9.70001 10.7001 9.80001 10.4001 10.1 10.1001C10.4 9.80013 10.7 9.60013 11.1 9.50013C11.4 9.40013 11.8 9.30013 12.6 9.20013C13.5 9.20013 13.8 9.20013 16 9.20013ZM16 7.70013C13.7 7.70013 13.5 7.70013 12.6 7.70013C11.7 7.70013 11.1 7.90013 10.6 8.10013C10.1 8.30013 9.60001 8.60013 9.10001 9.10013C8.60001 9.60013 8.40001 10.0001 8.10001 10.6001C7.90001 11.1001 7.80001 11.7001 7.70001 12.6001C7.70001 13.5001 7.70001 13.8001 7.70001 16.0001C7.70001 18.3001 7.70001 18.5001 7.70001 19.4001C7.70001 20.3001 7.90001 20.9001 8.10001 21.4001C8.30001 21.9001 8.60001 22.4001 9.10001 22.9001C9.60001 23.4001 10 23.6001 10.6 23.9001C11.1 24.1001 11.7 24.2001 12.6 24.3001C13.5 24.3001 13.8 24.3001 16 24.3001C18.2 24.3001 18.5 24.3001 19.4 24.3001C20.3 24.3001 20.9 24.1001 21.4 23.9001C21.9 23.7001 22.4 23.4001 22.9 22.9001C23.4 22.4001 23.6 22.0001 23.9 21.4001C24.1 20.9001 24.2 20.3001 24.3 19.4001C24.3 18.5001 24.3 18.2001 24.3 16.0001C24.3 13.8001 24.3 13.5001 24.3 12.6001C24.3 11.7001 24.1 11.1001 23.9 10.6001C23.7 10.1001 23.4 9.60013 22.9 9.10013C22.4 8.60013 22 8.40013 21.4 8.10013C20.9 7.90013 20.3 7.80013 19.4 7.70013C18.5 7.70013 18.3 7.70013 16 7.70013Z"
            fill="white"
          />
          <path
            d="M16 11.7001C13.6 11.7001 11.7 13.6001 11.7 16.0001C11.7 18.4001 13.6 20.3001 16 20.3001C18.4 20.3001 20.3 18.4001 20.3 16.0001C20.3 13.6001 18.4 11.7001 16 11.7001ZM16 18.8001C14.5 18.8001 13.2 17.6001 13.2 16.0001C13.2 14.5001 14.4 13.2001 16 13.2001C17.5 13.2001 18.8 14.4001 18.8 16.0001C18.8 17.5001 17.5 18.8001 16 18.8001Z"
            fill="white"
          />
          <path
            d="M20.4 12.6001C20.9523 12.6001 21.4 12.1524 21.4 11.6001C21.4 11.0479 20.9523 10.6001 20.4 10.6001C19.8477 10.6001 19.4 11.0479 19.4 11.6001C19.4 12.1524 19.8477 12.6001 20.4 12.6001Z"
            fill="white"
          />
        </svg>
      );
    case "social-icon-3":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path d="M32 0.00012207H0V32.0001H32V0.00012207Z" fill="#6A4EF5" />
          <path
            d="M23.6 12.1001C23.4 11.4001 22.9 10.9001 22.2 10.7001C21 10.4001 15.9 10.4001 15.9 10.4001C15.9 10.4001 10.9 10.4001 9.60001 10.7001C8.90001 10.9001 8.4 11.4001 8.2 12.1001C8 13.4001 8 16.0001 8 16.0001C8 16.0001 8 18.6001 8.3 19.9001C8.5 20.6001 9 21.1001 9.7 21.3001C10.9 21.6001 16 21.6001 16 21.6001C16 21.6001 21 21.6001 22.3 21.3001C23 21.1001 23.5 20.6001 23.7 19.9001C24 18.6001 24 16.0001 24 16.0001C24 16.0001 24 13.4001 23.6 12.1001ZM14.4 18.4001V13.6001L18.6 16.0001L14.4 18.4001Z"
            fill="white"
          />
        </svg>
      );
    case "social-icon-4":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path d="M32 0.00012207H0V32.0001H32V0.00012207Z" fill="#6A4EF5" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6 10.3001C20.1 8.80012 18.1 8.00012 16 8.00012C11.6 8.00012 8 11.6001 8 16.0001C8 17.4001 8.40001 18.8001 9.10001 20.0001L8 24.0001L12.2 22.9001C13.4 23.5001 14.7 23.9001 16 23.9001C20.4 23.9001 24 20.3001 24 15.9001C24 13.8001 23.1 11.8001 21.6 10.3001ZM16 22.6001C14.8 22.6001 13.6 22.3001 12.6 21.7001L12.4 21.6001L9.89999 22.3001L10.6 19.9001L10.4 19.6001C9.69999 18.5001 9.39999 17.3001 9.39999 16.1001C9.39999 12.5001 12.4 9.50012 16 9.50012C17.8 9.50012 19.4 10.2001 20.7 11.4001C22 12.7001 22.6 14.3001 22.6 16.1001C22.6 19.6001 19.7 22.6001 16 22.6001ZM19.6 17.6001C19.4 17.5001 18.4 17.0001 18.2 17.0001C18 16.9001 17.9 16.9001 17.8 17.1001C17.7 17.3001 17.3 17.7001 17.2 17.9001C17.1 18.0001 17 18.0001 16.8 18.0001C16.6 17.9001 16 17.7001 15.2 17.0001C14.6 16.5001 14.2 15.8001 14.1 15.6001C14 15.4001 14.1 15.3001 14.2 15.2001C14.3 15.1001 14.4 15.0001 14.5 14.9001C14.6 14.8001 14.6 14.7001 14.7 14.6001C14.8 14.5001 14.7 14.4001 14.7 14.3001C14.7 14.2001 14.3 13.2001 14.1 12.8001C14 12.5001 13.8 12.5001 13.7 12.5001C13.6 12.5001 13.5 12.5001 13.3 12.5001C13.2 12.5001 13 12.5001 12.8 12.7001C12.6 12.9001 12.1 13.4001 12.1 14.4001C12.1 15.4001 12.8 16.3001 12.9 16.5001C13 16.6001 14.3 18.7001 16.3 19.5001C18 20.2001 18.3 20.0001 18.7 20.0001C19.1 20.0001 19.9 19.5001 20 19.1001C20.2 18.6001 20.2 18.2001 20.1 18.2001C20 17.7001 19.8 17.7001 19.6 17.6001Z"
            fill="white"
          />
        </svg>
      );
    case "social-icon-5":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <rect y="0.00012207" width="32" height="32" fill="#6A4EF5" />
          <path
            d="M14.4984 14.3004V13.6776C14.285 13.649 14.068 13.6312 13.844 13.6312C11.173 13.6277 9 15.8025 9 18.4793C9 20.1202 9.818 21.5725 11.0699 22.4517C10.2626 21.5868 9.76821 20.4228 9.76821 19.1485C9.76821 16.5109 11.8808 14.3609 14.4984 14.3004Z"
            fill="white"
          />
          <path
            d="M14.6157 21.3625C15.8072 21.3625 16.7817 20.4121 16.8244 19.2304L16.8279 8.66931H18.7555C18.7164 8.45218 18.6951 8.22793 18.6951 8.00012H16.0633L16.0597 18.5612C16.017 19.743 15.0425 20.6933 13.8511 20.6933C13.4812 20.6933 13.1327 20.6008 12.8233 20.437C13.2216 20.9959 13.876 21.3625 14.6157 21.3625Z"
            fill="white"
          />
          <path
            d="M22.3584 12.2537V11.6664C21.6222 11.6664 20.9393 11.4493 20.3632 11.072C20.8753 11.6593 21.5688 12.0865 22.3584 12.2537Z"
            fill="white"
          />
          <path
            d="M18.695 18.4793V13.1222C19.7264 13.8626 20.9925 14.3004 22.3582 14.3004V12.2537C21.5687 12.0865 20.8751 11.6593 20.363 11.072C19.5379 10.5345 18.944 9.67309 18.7554 8.66931H16.8278L16.8243 19.2303C16.7816 20.4121 15.8071 21.3625 14.6157 21.3625C13.8759 21.3625 13.2251 20.9959 12.8196 20.4406C12.1155 20.0668 11.6318 19.3301 11.6318 18.4793C11.6318 17.2584 12.624 16.2653 13.8439 16.2653C14.0715 16.2653 14.292 16.3044 14.4983 16.3685V14.304C11.8807 14.3609 9.76816 16.5109 9.76816 19.1485C9.76816 20.4228 10.2625 21.5832 11.0698 22.4517C11.8558 23.0034 12.8161 23.3309 13.8475 23.3309C16.5184 23.3309 18.695 21.1525 18.695 18.4793Z"
            fill="white"
          />
        </svg>
      );
    default:
      return <></>;
  }
};

export { SvgIcons };
