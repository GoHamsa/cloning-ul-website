import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <header className={styles.container}>
          {/* bg #111827 */}
          {/* padding-top: 0.625rem;
padding-bottom: 0.625rem;
padding-left: 1rem;
padding-right: 1rem;
text-align: center;
border-radius: 9999px;
transition-duration: 150ms;
display: flex;
align-items: center;
color: white;
background-color: #6f42c1; */}
          <nav>
            <a href="https://eclipsefin.netlify.app/" className={styles.logo}>
              Eclipse
            </a>
            <ul>
              <li>
                <a href="https://eclipsefin.netlify.app/#features">Features</a>
              </li>
              <li>
                <a href="https://eclipsefin.netlify.app/#pricing">Pricing</a>
              </li>
              <li>
                <a href="https://eclipsefin.netlify.app/#faqs">FAQs</a>
              </li>
            </ul>
            <a
              href="https://eclipsefin.netlify.app/#pricing"
              className={styles.baseButton}
            >
              Start Now
            </a>
          </nav>
        </header>
        <section>
          <h1>
            All-in-one Finance App
            <br />
            you always wanted
          </h1>
          <br />
          <p>
            Gain control of your finances with our all-in-one finance app. Track
            your
            <br />
            spending, find investment opportunities, and learn.
          </p>
          <br />
          <a
            href="https://eclipsefin.netlify.app/#pricing"
            className={styles.getStarted}
          >
            Get Started
          </a>
        </section>
        <section>
          <img src="/pic1.png" alt="app preview" />
        </section>
        <br />
        <section>
          <p className={styles.myHeadline}>Start growing your wealth with</p>
          <p className={styles.myHeadline}>Eclipse</p>
          <br />
          <div>
            All-in-one personal finance app that simplifies investment
            opportunities, expense
            <br />
            tracking, and financial news for users..
          </div>
        </section>
        <section>
          <div className={styles.gridContainer}>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
            <div className="gridItem">
              <img
                src="blitz.png"
                alt="Description"
                className={styles.gridImage}
              />
              <h4>Automated Expense Tracking</h4>
              <p>
                Eclipse automatically tracks your expenses and provides a
                monthly report, in just a single click.
              </p>
            </div>
          </div>
        </section>
        <section>
          <br />

          <p className={styles.myHeadline}>
            Build a head start to your finances
          </p>
          <br />
          <p>
            Gain control of your finances with our all-in-one finance app. Track
            your
            <br />
            spending, find investment opportunities, and learn.
          </p>
          <br />
          <a
            href="https://eclipsefin.netlify.app/#pricing"
            className={styles.getStarted}
          >
            Start Now
          </a>
          <br />
        </section>
        <section>Section 6</section>
        <section>Section 7</section>
        <section>Section 8</section>
      </main>
      <br />

      <footer>Footer</footer>
    </>
  );
}
