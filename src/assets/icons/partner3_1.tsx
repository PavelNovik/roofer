import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="24.000000"
    height="34.500000"
    viewBox="0 0 24 34.5"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    {/*<linearGradient id="gradient">*/}
    {/*  <stop offset="0%" stop-color={'#f12c06'} />*/}
    {/*  <stop offset="50%" stop-color={'#f12c06'} />*/}
    {/*  <stop offset="100%" stop-color={'#faed34'} />*/}
    {/*</linearGradient>*/}
    <path
      id="Vector 9"
      d="M0 6.5L0 34.5L12 22.5L24 34.5L24 6.5L12 0L0 6.5Z"
      fill="#C4C4C4"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PartnerLogo1 = ForwardRef
