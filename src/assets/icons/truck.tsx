import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="100.833313"
    height="64.166626"
    viewBox="0 0 100.833 64.1666"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M77.91 36.66L81.53 37.12L81.44 38.17L83.6 38.95L84.28 38.22C86.57 39.41 88.55 41.25 89.83 43.54L89.05 44.32L89.97 46.38L91.02 46.29C91.43 47.62 91.66 48.99 91.66 50.41L91.2 53.99L90.1 53.94L89.23 56.1L90.1 56.78C88.87 59.12 87.08 61.05 84.79 62.33L84.01 61.5L81.9 62.42L81.99 63.52C80.71 63.93 79.33 64.16 77.91 64.16L74.29 63.7L74.34 62.56L72.23 61.73L71.5 62.6C69.2 61.37 67.23 59.58 65.95 57.29L66.77 56.46L65.86 54.35L64.76 54.45C64.39 53.16 64.16 51.83 64.16 50.41L64.67 46.75L65.72 46.79L66.59 44.68L65.77 44C67 41.66 68.75 39.78 71.04 38.45L71.82 39.23L73.92 38.31L73.83 37.3C75.12 36.89 76.49 36.66 77.91 36.66ZM77.91 43.54C74.11 43.54 71.04 46.61 71.04 50.41C71.04 54.22 74.11 57.29 77.91 57.29C81.72 57.29 84.79 54.22 84.79 50.41C84.79 46.61 81.72 43.54 77.91 43.54ZM22.91 36.66L26.53 37.12L26.44 38.17L28.6 38.95L29.28 38.22C31.57 39.41 33.55 41.25 34.83 43.54L34.05 44.32L34.97 46.38L36.02 46.29C36.43 47.62 36.66 48.99 36.66 50.41L36.2 53.99L35.06 53.94L34.23 56.1L35.1 56.78C33.87 59.12 32.08 61.05 29.79 62.33L29.01 61.5L26.9 62.42L26.99 63.52C25.71 63.93 24.33 64.16 22.91 64.16L19.29 63.7L19.34 62.56L17.23 61.73L16.5 62.6C14.2 61.37 12.23 59.58 10.95 57.29L11.77 56.46L10.86 54.35L9.76 54.45C9.39 53.16 9.16 51.83 9.16 50.41L9.67 46.75L10.72 46.79L11.59 44.68L10.77 44C12 41.66 13.75 39.78 16.04 38.45L16.82 39.23L18.92 38.31L18.83 37.3C20.12 36.89 21.49 36.66 22.91 36.66ZM22.91 43.54C19.11 43.54 16.04 46.61 16.04 50.41C16.04 54.22 19.11 57.29 22.91 57.29C26.72 57.29 29.79 54.22 29.79 50.41C29.79 46.61 26.72 43.54 22.91 43.54ZM68.75 0L82.5 18.33L91.66 18.33C96.75 18.33 100.83 22.41 100.83 27.5L100.83 41.25L91.66 41.25C91.66 33.64 85.52 27.5 77.91 27.5C70.3 27.5 64.16 33.64 64.16 41.25L36.66 41.25C36.66 33.64 30.52 27.5 22.91 27.5C15.3 27.5 9.16 33.64 9.16 41.25L0 41.25L0 18.33L43.54 18.33L43.54 0L68.75 0ZM50.41 6.87L50.41 18.33L75.44 18.33L66.45 6.87L50.41 6.87Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Truck = ForwardRef
