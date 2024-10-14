import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="66.666656"
    height="62.541626"
    viewBox="0 0 66.6667 62.5416"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M0 55.44L38.09 17.34L35.73 15L40.46 10.24L33.33 2.97C37.33 -1 43.63 -1 47.56 2.97L59.56 15L54.83 19.7L64.3 19.7L66.66 22.07L54.83 34.04L52.46 31.67L52.46 22.07L47.56 26.8L45.2 24.44L7.1 62.54L0 55.44Z"
      fill="#D06051"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Hummer = ForwardRef
