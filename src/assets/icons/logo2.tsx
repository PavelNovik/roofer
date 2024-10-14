import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="40.000000"
    height="19.000000"
    viewBox="0 0 40 19"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />

    <path
      id="Rectangle 7"
      d="M20 0L40 19L20 9.19L0 19L20 0Z"
      fill="#9A9A9A"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Logo2 = ForwardRef
