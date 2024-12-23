import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { className?: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    width="64.500000"
    height="69.500000"
    viewBox="0 0 64.5 69.5"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
    className={props.className}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector 6"
      d="M32 0L0 69.5L8.5 69.5L32 17.5L41.21 35L45 27L32 0ZM48.5 34L32 69.5L39.5 69.5L48.5 50L57 69.5L64.5 69.5L48.5 34Z"
      fill="#C5C5C5"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Partner1 = ForwardRef
