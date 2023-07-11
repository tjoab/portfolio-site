import React, { useRef, useState } from "react";
import "./styles/Submit.css";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

function validateForm() {
  const email = document.querySelector('input[name="email"]');
  const emailError = document.querySelector('div[name="email"]');
  const name = document.querySelector('input[name="name"]');
  const nameError = document.querySelector('div[name="name"]');
  const message = document.querySelector('textarea[name="message"]');
  const messageError = document.querySelector('div[name="message"]');
  const phone = document.querySelector('input[name="phone"]');
  const phoneError = document.querySelector('div[name="phone"]');
  let isValid = true;

  if (name.value === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (email.value === "") {
    emailError.textContent = "Your email is required";
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    if (!validateEmail(email.value)) {
      emailError.textContent = "Enter a valid email";
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }
  }

  if (phone.value === "") {
    phoneError.classList.add("hidden");
  } else {
    if (!validatePhoneNumber(phone.value)) {
      phoneError.classList.remove("hidden");
      isValid = false;
    } else {
      phoneError.classList.add("hidden");
    }
  }

  if (message.value === "") {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  return isValid;
}

function Submit() {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_h9s4pc8",
          "template_4gi7n0n",
          form.current,
          "68MtcmGowFlftkgij"
        )
        .then(
          (result) => {
            form.current.reset();
            setSubmitStatus("success");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 4000);
          },
          (error) => {
            setSubmitStatus("error");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 4000);
          }
        );
    }
  };

  return (
    <div className="screenWrap">
      <m.div
        class="screenContainer"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.55, ease: "easeOut" }}
      >
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div class="screen-body">
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input
                      name="name"
                      class="app-form-control"
                      placeholder="NAME"
                      type="text"
                    ></input>
                    <div name="name" className="error hidden">
                      Your name is required
                    </div>
                  </div>
                  <div class="app-form-group">
                    <input
                      name="email"
                      class="app-form-control"
                      placeholder="EMAIL"
                      type="text"
                    ></input>
                    <div name="email" className="error hidden">
                      Your email is required
                    </div>
                  </div>
                  <div class="app-form-group">
                    <input
                      name="phone"
                      class="app-form-control"
                      placeholder="CONTACT NO"
                      type="text"
                    ></input>
                    <div name="phone" className="error hidden">
                      Please enter a valid phone number if you would like to
                      include one
                    </div>
                  </div>
                  <div class="app-form-group message">
                    <textarea
                      name="message"
                      class="app-form-control message"
                      id="message"
                      placeholder="MESSAGE"
                      cols={5}
                      rows={10}
                    ></textarea>
                    <div name="message" className="error hidden">
                      A message is required
                    </div>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">SUBMIT</button>
                  </div>

                  <div className={`submit-message-${showMessage}`}>
                    {submitStatus === "success"
                      ? "Message sent! I will reach out to you soon."
                      : "Uh oh... something isn't working."}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </m.div>
    </div>
  );
}
export default Submit;
