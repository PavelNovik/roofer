import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="91.666672"
    height="91.666626"
    viewBox="0 0 91.6667 91.6666"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M68.75 45.83L68.75 4.58C68.75 3.36 68.26 2.2 67.4 1.34C66.54 0.48 65.38 0 64.16 0L4.58 0C3.36 0 2.2 0.48 1.34 1.34C0.48 2.2 0 3.36 0 4.58L0 68.75L18.33 50.41L64.16 50.41C65.38 50.41 66.54 49.93 67.4 49.07C68.26 48.21 68.75 47.04 68.75 45.83ZM87.08 18.33L77.91 18.33L77.91 59.58L18.33 59.58L18.33 68.75C18.33 69.96 18.81 71.13 19.67 71.99C20.53 72.85 21.7 73.33 22.91 73.33L73.33 73.33L91.66 91.66L91.66 22.91C91.66 21.7 91.18 20.53 90.32 19.67C89.46 18.81 88.29 18.33 87.08 18.33Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Dialog = ForwardRef
