import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div class="middle">
      <Head title="Zool Tech Solutions Pvt Ltd." />
      <Nav />

      <div className="hero">
        <div className="banner">
          <h1 className="title">Bridge the gap between design & technology</h1>
          <p className="description">
            User Experience. User Interface Design & Development.
          </p>
        </div>

        <div className="content">
          <h1>
            Product Ideation, UI Engineering, UX Design and Development company.
          </h1>

          <p>
            This makes us truly a one-of-a-kind company offering solutions; for
            startups to global enterprises helping companies innovate on their
            web products & ideas. Working as an extended product team we quickly
            prototype and validate your ideas. A good deal of effort is invested
            in researching, information processing, knowledge application,
            problem solving and approach validations which help you make better
            decisions in your approach to product design and strategy. Zool is a
            Product Ideation, UI Engineering, UX Design & Development company
            based in Bangalore. Working with startups to enterprises to innovate
            on their web & mobile product ideas. Focus on Javascript Full Stack,
            for building high-fidelity, performance oriented solutions using
            cloud architectures, great visual designs & applied UX principles.
          </p>
        </div>

        <div className="row">
          <Link href="https://github.com/zeit/next.js#setup">
            <a className="card">
              <h3>Zool Labs </h3>
              <p>
                At Zool labs our perusal of new expertise are rooted in
                passionate research to identify opportunities of products users
                care about.
              </p>
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js">
            <a className="card">
              <h3>Ecom & Portals </h3>
              <p>
                We’re inventive and ambitious, from lean start-ups to the
                biggest businesses.
              </p>
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js/tree/master/examples">
            <a className="card">
              <h3>Web Products </h3>
              <p>
                The true future of web products is in continuosly innovating the
                products for the future.
              </p>
            </a>
          </Link>
        </div>
        <div className="row">
          <Link href="https://github.com/zeit/next.js">
            <a className="card">
              <h3>Cloud Solutions </h3>
              <p>
                We work with distributed computing, infrastructure and platform
                as a services players to orchestrate and build cloud solutions.
              </p>
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js">
            <a className="card">
              <h3>Mobile Apps </h3>
              <p>
                Complimentary access to your data on mobile apps is at the heart
                of success in the new mobile world.
              </p>
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js">
            <a className="card">
              <h3>Design </h3>
              <p>
                A great design philosophy is at the core of everything we build.
                We imbibe great User Interface with a great User Experience.
              </p>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          max-width: 80%;
          color: #333;
          margin:auto auto;
        }
        .banner{
          min-height: 500px;
          padding: 0px 20px;

          background-image: url(static/design-banner.png);
          background-repeat: no-repeat;
          background-position: right;
        }

        .content{
          padding:0px 20px;
          margin-bottom:40px;
        }

        .content p{
          line-height:24px;
        }

        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 72px;
          font-family: "Roboto Condensed";
          text-align: left;
          width: 500px;
        }
        .description {
          font-size:24px;
          width: 500px;
        }
        .row {
          margin: 0px auto 0px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 33%;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 0px solid #9b9b9b;
          font-family: "Roboto";
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #000;
          font-size: 28px;
          font-family: "Roboto Condensed";
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 18px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
