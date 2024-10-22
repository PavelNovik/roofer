import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { className?: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    width="78.500000"
    height="55.500000"
    viewBox="0 0 78.5 55.5"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
    className={props.className}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector 10"
      d="M0 55.5L0 30L19 30L19 16L37.5 16L37.5 0L61.5 0L61.5 30L78.5 30L78.5 55.5C78.5 55.5 59 51 40 51C23.2 51 0 55.5 0 55.5Z"
      fill="#C5C5C5"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Partner4 = ForwardRef
