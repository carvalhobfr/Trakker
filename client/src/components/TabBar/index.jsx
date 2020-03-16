/* import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const TabBar = props => {
  return (
    <div className="TabBar">
      <div class="container">
        <input class="hit-area" type="radio" name="hit-area"></input> 
        <input class="hit-area" type="radio" name="hit-area"></input>
        <input class="hit-area" type="radio" name="hit-area"></input>
        <input class="hit-area" type="radio" name="hit-area"></input>
        <div class="options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="100"
            viewBox="0 0 360 100"
            enable-background="new"
          >
            <g stroke="#0e232e" stroke-width="2">
              <path d="M129.56 61.85h2.4" fill="#fff" fill-rule="evenodd" stroke-linecap="round" />
              <circle
                r="3.186"
                cy="61.9"
                cx="135.6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M139.915 50.36H129.56" fill="none" stroke-linecap="round" />
              <circle
                transform="scale(-1)"
                cx="-143.429"
                cy="-50.41"
                r="3.186"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M138.778 61.85h10.48"
                fill="#fff"
                fill-rule="evenodd"
                stroke-linecap="round"
              />
              <path d="M149.26 50.36h-2.527" fill="none" stroke-linecap="round" />
              <ellipse
                ry="7.265"
                rx="7.265"
                cy="54.661"
                cx="56.915"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M67.104 64.842l-4.672-4.672"
                fill="#005c94"
                fill-rule="evenodd"
                stroke-linecap="round"
              />
              <path
                d="M293.497 64.742c-.666 0-.947-.617-.947-1.325V54.01c0-.743.402-1.082 1.01-1.58 1.587-1.41 6.04-4.675 7.513-5.87.84-.648 1.55-.677 2.265-.112 1.895 1.507 5.787 4.754 7.52 6.046.567.504.822.597.822 1.39v9.975c0 .857-.18.882-1.01.882h-4.357c-.785 0-1.262-.273-1.262-.947v-4.798c0-.81-.116-.884-.883-.884h-3.725c-.632 0-1.01-.003-1.01.758v4.673c0 1.015-.19 1.2-.947 1.2z"
                fill="none"
              />
              <g fill="none">
                <path d="M213.432 64.084c-.78 0-1.136-.53-1.136-1.136V55.12c.268-.97 2.318-6.46 2.59-7.26.27-.8.507-.948 1.26-.948h11.934c.65 0 .793.4 1.01.947.523 1.315 1.754 5.008 2.462 7.575 0 2.568.063 5.975.063 7.64 0 .593-.54 1.01-1.073 1.01h-17.11z" />
                <path d="M212.643 55.877h3.85c.44 0 .886.307 1.17.758.376.598.657.96.978 1.515.245.422.478.726.853.726h4.546c.393 0 .922.018 1.2-.505.44-.834.71-1.282 1.103-1.956.29-.5.61-.505 1.105-.505h3.63" />
              </g>
            </g>
          </svg>
        </div>
        <div class="highlight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="100"
            viewBox="0 0 360 100"
            enable-background="new"
          >
            <g>
              <path d="M0 20h360v80H0z" fill="#2552fe" />
              <path
                d="M129.56 61.85h2.4"
                fill="#fff"
                fill-rule="evenodd"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <circle
                r="3.186"
                cy="61.9"
                cx="135.6"
                fill="#fff"
                stroke="#fff"
                stroke-width="1.428"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill-opacity=".08"
              />
              <path
                d="M139.915 50.36H129.56"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <circle
                transform="scale(-1)"
                cx="-143.429"
                cy="-50.41"
                r="3.186"
                fill="#fff"
                stroke="#fff"
                stroke-width="1.428"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill-opacity=".08"
              />
              <path
                d="M138.778 61.85h10.48"
                fill="#fff"
                fill-rule="evenodd"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M149.26 50.36h-2.527"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <ellipse
                ry="7.265"
                rx="7.265"
                cy="54.661"
                cx="56.915"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M67.104 64.842l-4.672-4.672"
                fill="#005c94"
                fill-rule="evenodd"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M293.497 64.742c-.666 0-.947-.617-.947-1.325V54.01c0-.743.402-1.082 1.01-1.58 1.587-1.41 6.04-4.675 7.513-5.87.84-.648 1.55-.677 2.265-.112 1.895 1.507 5.787 4.754 7.52 6.046.567.504.822.597.822 1.39v9.975c0 .855-.18.88-1.01.88h-4.357c-.785 0-1.262-.273-1.262-.947v-4.798c0-.81-.114-.884-.88-.884h-3.726c-.632 0-1.01-.002-1.01.76v4.672c0 1.015-.19 1.2-.947 1.2z"
                fill="#fff"
                fill-rule="evenodd"
                stroke="#fff"
                stroke-width="1.5"
                fill-opacity=".08"
              />
              <path
                d="M213.432 64.084c-.78 0-1.136-.53-1.136-1.136V55.12c.268-.97 2.318-6.46 2.59-7.26.27-.8.507-.948 1.26-.948h11.934c.65 0 .793.4 1.01.947.523 1.313 1.754 5.006 2.462 7.573 0 2.568.063 5.975.063 7.64 0 .593-.54 1.01-1.073 1.01h-17.11z"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
              />
              <path
                d="M212.643 55.877h3.85c.44 0 .886.307 1.17.758.376.598.657.96.978 1.515.247.422.48.726.855.726h4.546c.394 0 .923.018 1.2-.505.44-.832.71-1.28 1.104-1.954.29-.5.61-.505 1.105-.505h3.63"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
              />
              <path
                d="M212.643 55.877l-.186 7.873 18.906.125-.284-7.966-4.438.09-1.75 2.72-6.094-.097-1.938-2.72z"
                fill="#fff"
                fill-rule="evenodd"
                fill-opacity=".08"
              />
            </g>
          </svg>
        </div>
        <div class="bar"></div>
      </div>
    </div>
  );
};

export default TabBar;
 */
