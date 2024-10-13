import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="19.199432"
    height="12.370239"
    viewBox="0 0 19.1994 12.3702"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M0.34 10.04L8.53 0.49C8.66 0.33 8.82 0.21 9.01 0.12C9.19 0.04 9.39 0 9.6 0C9.8 0 10 0.04 10.18 0.12C10.37 0.21 10.53 0.33 10.66 0.49L18.85 10.04C19.64 10.96 18.99 12.37 17.79 12.37L1.4 12.37C0.2 12.37 -0.45 10.96 0.34 10.04Z"
      fill="#D06051"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowUp = ForwardRef
