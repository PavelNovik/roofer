import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="98.037491"
    height="93.454224"
    viewBox="0 0 98.0375 93.4542"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M50.6 36.66C48.76 37.81 47.02 39.18 45.37 40.79C43.86 42.35 42.48 44.04 41.38 45.83L27.5 45.83L27.5 38.95C27.5 37.67 28.5 36.66 29.79 36.66L50.6 36.66ZM82.5 27.5L0 27.5L0 0L82.5 0L82.5 27.5ZM73.33 9.16L9.16 9.16L9.16 18.33L73.33 18.33L73.33 9.16ZM13.75 73.33L13.75 32.08L4.58 32.08L4.58 82.5L45 82.5C42.43 79.84 40.38 76.74 38.95 73.33L13.75 73.33ZM98.03 87.08L91.66 93.45L77.36 79.38C74.2 81.35 70.44 82.5 66.45 82.5C55 82.5 45.83 73.33 45.83 61.87C45.83 50.41 55 41.25 66.45 41.25C77.91 41.25 87.08 50.41 87.08 61.87C87.08 65.9 85.93 69.71 83.92 72.87L98.03 87.08ZM77.91 61.87C77.91 58.83 76.7 55.92 74.56 53.77C72.41 51.62 69.49 50.41 66.45 50.41C63.41 50.41 60.5 51.62 58.35 53.77C56.2 55.92 55 58.83 55 61.87C55 64.91 56.2 67.82 58.35 69.97C60.5 72.12 63.41 73.33 66.45 73.33C69.49 73.33 72.41 72.12 74.56 69.97C76.7 67.82 77.91 64.91 77.91 61.87Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Search = ForwardRef