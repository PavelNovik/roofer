import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="82.500000"
    height="82.500000"
    viewBox="0 0 82.5 82.5"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M77.91 57.29C72.41 57.29 66.45 56.37 61.41 54.54L60.04 54.54C58.66 54.54 57.75 55 56.83 55.91L46.75 66C33.91 59.12 22.91 48.58 16.5 35.75L26.58 25.66C27.95 24.29 28.41 22.45 27.5 21.08C26.12 16.04 25.2 10.08 25.2 4.58C25.2 2.29 22.91 0 20.62 0L4.58 0C2.29 0 0 2.29 0 4.58C0 47.66 34.83 82.5 77.91 82.5C80.2 82.5 82.5 80.2 82.5 77.91L82.5 61.87C82.5 59.58 80.2 57.29 77.91 57.29ZM9.16 9.16L16.04 9.16C16.5 13.29 17.41 17.41 18.33 21.08L12.83 26.58C11 21.08 9.62 15.12 9.16 9.16ZM73.33 73.33C67.37 72.87 61.41 71.5 55.91 69.66L61.41 64.16C65.08 65.08 69.2 66 73.33 66L73.33 73.33Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Phone2 = ForwardRef
