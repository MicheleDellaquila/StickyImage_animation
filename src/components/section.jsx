import React, { forwardRef } from "react"
import "./section.css"

const Section = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Section">
      <div className="Section__wrapper">{props.children}</div>
    </div>
  )
})

export default Section
