import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="65.500000"
    height="84.000000"
    viewBox="0 0 65.5 84"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs>
      <linearGradient
        x1="0.000000"
        y1="38.347862"
        x2="65.500000"
        y2="38.347862"
        id="paint_linear_1_326_0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#C62813" />
        <stop offset="1.000000" stop-color="#D06051" />
      </linearGradient>
    </defs>
    <path
      id="Vector 7"
      d="M24.5 0L0 25.5L0 84L65.5 84L65.5 35.5L54.5 25.5L54.5 44L47.5 44L47.5 20.5L33.5 7L33.5 44L24.5 44L24.5 0Z"
      fill="url(#paint_linear_1_326_0)"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Partner2 = ForwardRef
