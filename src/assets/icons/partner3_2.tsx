import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="74.000000"
    height="72.500000"
    viewBox="0 0 74 72.5"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector 8"
      d="M9.5 29L37.5 11.5L65.5 29L74 23L37.5 0L0 23L9.5 29ZM0 29L9.5 36L9.5 72.5L0 66L0 29ZM65.5 72.5L74 66L74 29L65.5 35.5L65.5 72.5Z"
      fill="#C4C4C4"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PartnerLogo2 = ForwardRef
