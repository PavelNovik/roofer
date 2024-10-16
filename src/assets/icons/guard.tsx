import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="82.500000"
    height="100.833374"
    viewBox="0 0 82.5 100.833"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M82.5 45.83C82.5 71.27 64.9 95.05 41.25 100.83C17.6 95.05 0 71.27 0 45.83L0 18.33L41.25 0L82.5 18.33L82.5 45.83ZM41.25 91.66C58.43 87.08 73.33 66.64 73.33 46.84L73.33 24.29L41.25 9.99L9.16 24.29L9.16 46.84C9.16 66.64 24.06 87.08 41.25 91.66ZM36.66 59.58L45.83 59.58L45.83 73.33L59.58 73.33L59.58 50.41L68.75 50.41L41.25 27.5L13.75 50.41L22.91 50.41L22.91 73.33L36.66 73.33L36.66 59.58Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Guard = ForwardRef
