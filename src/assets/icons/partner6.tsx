import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="59.000000"
    height="63.000000"
    viewBox="0 0 59 63"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector 13"
      d="M0 25.5L0 0L11.5 13L11.5 37.47L0 25.5ZM21 47.37L11.5 37.47L11.5 63L21 63L21 47.37ZM21 47.37L21 25.5L36 43.5L59 16.5L59 35L36 63L21 47.37Z"
      fill="#C5C5C5"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Partner6 = ForwardRef
