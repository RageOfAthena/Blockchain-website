import styles from "./Section7.module.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState, useRef } from "react";
// Section containing Currency Converter
function Section7() {
  // For Intersection Obsever api
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [data, ondata] = useState(); // for holding the response data from the api provided
  const [disabled1, ondisabled1] = useState(); //for holding what user selected from dropdown
  const [num, onnum] = useState(); // for holding the number entered in text field
  const [convert, onconvert] = useState(); //for holding the output of the conversion

  const refer1 = useRef(); // ref for controlling input fields
  const refer2 = useRef(); // ref for controlling dropdown
  const refer3 = useRef(); // ref for reseting dropdown when user clicks reset
  // useEffect that runs once on load and fetches all the currency data from the api
  useEffect(() => {
    fetch("https://blockchain.info/ticker")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        ondata(e);
      });
  }, []);

  return (
    <section className={styles.section} ref={ref} id="five">
      {/* the following will come to view when we have scrolled 30% of the section used intersection observer api */}
      {inView && (
        <React.Fragment>
          <h1 className={styles.head}>Cryptocurrency Converter</h1>
          <div className={styles.convert}>
            <div className={styles.flex}>
              <input
                type="text"
                className={styles.textb}
                ref={refer1}
                // the update the state of number when user enters anything on text field
                onChange={(e) => {
                  onnum(e.target.value);
                }}
              />
              <button
                data-qa-id="swap-currencies"
                type="button"
                className={styles.button}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  className={styles.buttonsvg}
                >
                  <path
                    d="M6 16H20M20 16L17 19M20 16L17 13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 8H4M4 8L7 11M4 8L7 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              {/* dropdown for selecting the currenncies required to be converted to*/}
              <select
                className={styles.from}
                // the update the state of disabled (i.e is data of dropdown) when user selects anything on dropdown
                onChange={(event) => {
                  ondisabled1(event.target.value);
                }}
                ref={refer2}
              >
                {/* default option */}
                <option value="">Select a Option</option>
                {/* Serches for all the keys of data object returned from api and dynamically creates options based on what we have on the object */}
                {/* Object.keys converts the keys of the object into array */}
                {Object.keys(data).map((e, i) => {
                  if (e === "USD") {
                    return (
                      <option value={e} ref={refer3}>
                        {e}
                      </option>
                    );
                  }
                  return <option value={e}>{e}</option>;
                })}
              </select>
            </div>
            {/* it is to display result of the convertion */}
            {convert && (
              <p className={styles.yes}>
                {num} Bitcoin (BTC) = {convert} {disabled1}
              </p>
            )}
            {/* when there is no valid data from user or at the begining of operations show this message as below */}
            {!convert && <p className={styles.no}>Please select a Currency</p>}
            {/* button for asking to convert currency */}
            <button
              className={styles.compute}
              // it on clicked will check for validity of the input and dropdown filed and then will query for that currency to get data
              onClick={(e) => {
                if (disabled1 && num)
                  fetch(
                    `https://blockchain.info/tobtc?currency=${disabled1}&value=${num}`
                  )
                    .then((e) => {
                      return e.json();
                    })
                    .then((e) => {
                      onconvert(e);
                    });
              }}
            >
              Convert
            </button>
            {/* button for resetting the input to default */}
            <button
              className={styles.refresh}
              // resets all the fields
              onClick={(e) => {
                refer1.current.value = "";
                refer3.current.selected = true;
                ondisabled1("USD");
                onconvert("");
                onnum("");
              }}
            >
              Refresh
            </button>
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
export default Section7;
