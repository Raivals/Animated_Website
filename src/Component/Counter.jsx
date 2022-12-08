import React, { Fragment, useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "../CSS/Counter.css"

const Counter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <Fragment>
      <section className="counter">
        <div className="counter-row">
          <div className="counter-column">
            <strong data-number="305">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true)
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )
                }}
              </CountUp>
            </strong>
            <span>
              On Going <br /> Projects
            </span>
          </div>

          <div className="counter-row">
            <div className="counter-column">
              <strong data-number="1050">
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={1050}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true)
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </VisibilitySensor>
                    )
                  }}
                </CountUp>
              </strong>
              <span>
                Total <br /> Projects
              </span>
            </div>

            <div className="counter-row">
              <div className="counter-column">
                <strong data-number="206">
                  <CountUp
                    {...rest}
                    start={viewPortEntered ? null : 0}
                    end={206}
                  >
                    {({ countUpRef }) => {
                      return (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                          delayedCall
                        >
                          <span className="number" ref={countUpRef} />
                        </VisibilitySensor>
                      )
                    }}
                  </CountUp>
                </strong>
                <span>
                  Job <br /> Success
                </span>
              </div>

              <div className="counter-row">
                <div className="counter-column">
                  <strong data-number="27">
                    <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={27}
                    >
                      {({ countUpRef }) => {
                        return (
                          <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered(true)
                              }
                            }}
                            delayedCall
                          >
                            <span className="number" ref={countUpRef} />
                          </VisibilitySensor>
                        )
                      }}
                    </CountUp>
                  </strong>
                  <span>
                    {" "}
                    Total <br /> Branches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Counter
