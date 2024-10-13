import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="26.000000"
    height="22.000000"
    viewBox="0 0 26 22"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Rectangle 6"
      d="M0 5.97L13 0L26 5.97L26 22L0 22L0 5.97Z"
      fill="#AB1E0B"
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Logo1 = ForwardRef
