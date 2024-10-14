import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="66.666656"
    height="30.000000"
    viewBox="0 0 66.6667 30"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M56.66 30L66.66 30L33.33 0L0 30L10 30L33.33 8.96L56.66 30ZM16.66 6.03L16.66 0L6.66 0L6.66 15L16.66 6.03Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Roof = ForwardRef
