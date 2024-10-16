import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    width="73.333313"
    height="73.333374"
    viewBox="0 0 73.3333 73.3334"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M8.5 60.3L13.2 65L19.2 59.03L14.46 54.3L8.5 60.3ZM36.66 16.66C25.63 16.66 16.66 25.63 16.66 36.66C16.66 47.7 25.63 56.66 36.66 56.66C47.7 56.66 56.66 47.7 56.66 36.66C56.66 25.6 47.7 16.66 36.66 16.66ZM63.33 40L73.33 40L73.33 33.33L63.33 33.33L63.33 40ZM54.13 59.03L60.13 65L64.83 60.3L58.86 54.3L54.13 59.03ZM64.83 13.33L60.13 8.66L54.13 14.63L58.86 19.36L64.83 13.33ZM40 0L33.33 0L33.33 10L40 10L40 0ZM19.2 14.63L13.2 8.66L8.5 13.33L14.46 19.36L19.2 14.63ZM0 40L10 40L10 33.33L0 33.33L0 40ZM40 63.33L33.33 63.33L33.33 73.33L40 73.33L40 63.33Z"
      fill="#D06051"
      fillOpacity="1.000000"
      fillRule="nonzero"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Sun = ForwardRef
