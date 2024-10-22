import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { className?: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    width="132.000000"
    height="46.000000"
    viewBox="0 0 132 46"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
    className={props.className}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector 11"
      d="M16 46L50.5 46L66 30.5L81.5 46L106 21.5L120 35.5L132 35.5L96.5 0L66 30.5L35.5 0L0 35.5L12 35.5L26 21.5L33 28.5L16 46Z"
      fill="#C5C5C5"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Partner5 = ForwardRef
