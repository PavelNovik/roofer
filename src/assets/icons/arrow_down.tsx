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
      d="M0.34 2.32L8.53 11.87C8.66 12.03 8.82 12.15 9.01 12.24C9.19 12.32 9.39 12.37 9.6 12.37C9.8 12.37 10 12.32 10.18 12.24C10.37 12.15 10.53 12.03 10.66 11.87L18.85 2.32C19.64 1.4 18.99 0 17.79 0L1.4 0C0.2 0 -0.45 1.4 0.34 2.32Z"
      fill="#D06051"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowDown = ForwardRef
