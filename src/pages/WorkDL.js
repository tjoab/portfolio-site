import React from "react";
import "./styles/WorkDL.css";
import { Helmet } from "react-helmet";
import BlurbWithP from "../components/BlurbWithP";
import BS from "../resources/buySell.png";
import UN from "../resources/uncertainty.png";
import { motion as m } from "framer-motion";

function WorkDL() {
  const problem = [
    "With the use of AI finding its way into almost every field, the world of quantitative finance is no different. Recently, the use of different machine learning models like long short-term memory (LSTM) networks have been applied to integrate current and past information to produce the price signal for a given equity. These models are typically benchmarked on error metrics, and it is rare to find frameworks where the uncertainty of the model's predictions have been quantified.",
    "Traditionally, an ensemble of models are trained in order to estimate uncertainty, however this technique is computationally expensive and impractical for time-sensitive contexts like intraday trading.",
  ];
  const bayes = [
    "The field of Bayesian statistics offers a framework for contextualizing uncertainty as a function of both prior beliefs and observed data. By modeling weights as distributions, Bayesian neural networks introduce variability into model parameters, and thus into the predictions made by the model. In situations where data is limited, Bayesian neural networks have demonstrated a particular effectiveness due to the way in which they update the posterior distribution of weights as more data becomes available, resulting in a closer approximation of the maximum likelihood estimate of weights",
    "Introducing a Bayesian layer into traditional learning models eliminates the need to train multiple neural networks, thereby enabling estimation of uncertainty more efficiently.",
  ];
  const evalu = [
    "Performance needs to be evaluated on two fronts, accuracy and uncertainty. To get a sense of the model's reliability, one can compare the error in the validation set to the standard deviation across multiple inferences in the Bayesian network. Ideally, the model should have both low error and low uncertainty, which means it can make accurate predictions with a high level of confidence. But if it has high error and low uncertainty, that means it's too confident and might not make good investment choices. If it has low error but high uncertainty, it might be too cautious and miss out on good opportunities.",
  ];
  const trade = [
    "Using the accuracy and uncertainty estimates generated by the model, a trading strategy was developed. Over each timestep, a Gaussian variate&mdash;which is supposed to represented the predicted asset price at the end of the timestep&mdash;is generated using the estimates produced by the model. If the generated price is higher than the current price while no trade has been initiated, the strategy makes a purchase. A sale is made when we are currently in a trade and the generated price is lower than the current price. If neither of these conditions are met, the policy holds from buying until the next time point. Since both the potential profitability and the level of uncertainty are fed into the strategy, investors can ensure that the model is not taking risks beyond what they are comfortable with.",
  ];
  const conc = [
    "Intraday trading will always be an attractive opportunity for investors due to its lucrative nature. Even though these models look promising, the associated costs of executing trades were not considered. Sophisticated Bayesian models are not immune to these risks, however can help traders make better decisions and modulate their level of risk exposure.",
  ];

  return (
    <>
      <Helmet>
        <title>TJ Ayoub • Work</title>
      </Helmet>
      <m.h1
        className="DL-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
      >
        <span slot="title" className="DL-hero">
          <span className="DL-holder">
            <span className="DL-holder-content">
              Bayesian <br></br> Deep Learning
            </span>
          </span>
        </span>
      </m.h1>
      <m.div
        className="DL-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.55, ease: "easeOut" }}
      >
        <p className="center">
          <div className="DL-subtitle">
            Personal Project &nbsp; • &nbsp; Machine Learning / AI &nbsp; •
            &nbsp; 2023
          </div>
        </p>
      </m.div>
      <BlurbWithP texts={problem} title="Problem" />
      <BlurbWithP texts={bayes} title="Bayesian Layers" />
      <img
        style={{
          display: "block",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
          maxWidth: "1600px",
          width: "65%",
          borderRadius: "1.5rem",
        }}
        src={UN}
      ></img>
      <BlurbWithP texts={evalu} title="Evaluation" />
      <BlurbWithP texts={trade} title="Strategy" />
      <img
        style={{
          display: "block",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
          maxWidth: "1600px",
          width: "65%",
          borderRadius: "1.5rem",
        }}
        src={BS}
      ></img>
      <BlurbWithP texts={conc} title="Issues" />
    </>
  );
}

export default WorkDL;
