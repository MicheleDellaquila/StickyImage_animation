import React, { useRef, useEffect, useState } from "react"
import "./app.css"
import { motion, useInView } from "framer-motion"
import { images } from "./utils/images"
import Section from "./components/section"

const App = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const isInView2 = useInView(ref2, { amount: 0.5 })
  const isInView3 = useInView(ref3, { amount: 0.5 })
  const [isScrolled, setIsScrolled] = useState(false)

  
  // check if scrolled
  const changeScrolled = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true)
    }
  }

  // check scroll avent
  useEffect(() => {
    window.addEventListener("scroll", changeScrolled)

    return () => {
      window.removeEventListener("scroll", changeScrolled)
    }
  }, [])

  return (
    <div className="App">
      <div className="App__blockImage">
        <div className="App__stickyImage">
          <div className="App__wrapper">
            {images.map((image, index) => {
              // check current index
              if (index + 1 === 1) {
                return (
                  <motion.img
                    key={index}
                    style={{ opacity: isScrolled ? (isInView ? 1 : 0) : 1 }}
                    className="App__image"
                    src={image}
                  />
                )
              } else if (index + 1 === 2) {
                return (
                  <motion.img
                    key={index}
                    style={{ opacity: isInView2 ? 1 : 0 }}
                    className="App__image"
                    src={image}
                  />
                )
              } else {
                return (
                  <motion.img
                    key={index}
                    style={{ opacity: isInView3 ? 1 : 0 }}
                    className="App__image"
                    src={image}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
      <Section ref={ref}>
        <h1 className="Section__title">Lorem Ipsum is simply dummy text</h1>
        <p className="Section__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </Section>
      <Section ref={ref2}>
        <h1 className="Section__title">Lorem Ipsum is simply dummy text</h1>
        <p className="Section__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </Section>
      <Section ref={ref3}>
        <h1 className="Section__title">Lorem Ipsum is simply dummy text</h1>
        <p className="Section__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </Section>
    </div>
  )
}

export default App
