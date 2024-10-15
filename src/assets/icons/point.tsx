import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="22.281250"
    height="22.281250"
    viewBox="0 0 22.2812 22.2812"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M11.14 0C4.98 0 0 4.98 0 11.14C0 17.29 4.98 22.28 11.14 22.28C17.29 22.28 22.28 17.29 22.28 11.14C22.28 4.98 17.29 0 11.14 0ZM11.14 2.15C16.1 2.15 20.12 6.17 20.12 11.14C20.12 16.1 16.1 20.12 11.14 20.12C6.17 20.12 2.15 16.1 2.15 11.14C2.15 6.17 6.17 2.15 11.14 2.15ZM17.43 8L16.42 6.98C16.21 6.77 15.87 6.77 15.66 6.98L9.31 13.28L6.62 10.57C6.41 10.36 6.07 10.36 5.86 10.57L4.84 11.58C4.63 11.79 4.63 12.13 4.84 12.34L8.92 16.45C9.13 16.66 9.47 16.67 9.68 16.46L17.43 8.77C17.64 8.56 17.64 8.21 17.43 8Z"
      fill="#FFFFFF"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Point = ForwardRef
