import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="grid">
      <div className="fun">
        <div className="music">
          <div className="wrapper">
            <div className="icon">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 20.5013 0.0664062 C 9.48964 0.0664062 0.5625 8.99331 0.5625 20.005 C 0.5625 31.0171 9.48964 39.9433 20.5013 39.9433 C 31.5142 39.9433 40.4404 31.0171 40.4404 20.005 C 40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586 L 20.5013 0.0664062 V 0.0664062 Z M 29.6451 28.8236 C 29.56 28.963 29.4483 29.0842 29.3163 29.1804 C 29.1843 29.2766 29.0346 29.3458 28.8758 29.3841 C 28.717 29.4223 28.5522 29.4289 28.3909 29.4034 C 28.2296 29.3779 28.0748 29.3208 27.9356 29.2355 C 23.2542 26.3759 17.3608 25.7283 10.4204 27.314 C 10.099 27.3871 9.76174 27.3296 9.48275 27.1541 C 9.20375 26.9787 9.00584 26.6996 8.9325 26.3783 C 8.89597 26.2192 8.89119 26.0545 8.91842 25.8935 C 8.94565 25.7326 9.00436 25.5786 9.09118 25.4404 C 9.17801 25.3021 9.29126 25.1824 9.42443 25.088 C 9.5576 24.9936 9.70808 24.9264 9.86726 24.8902 C 17.4625 23.1543 23.9775 23.9021 29.2332 27.114 C 29.8189 27.4736 30.0046 28.2378 29.6451 28.8236 V 28.8236 Z M 32.0856 23.3938 C 31.6356 24.1259 30.6785 24.3569 29.9475 23.9069 C 24.588 20.6119 16.4182 19.6578 10.0789 21.5821 C 9.25679 21.8305 8.38845 21.3671 8.13893 20.5464 C 8.01986 20.1518 8.06213 19.7262 8.25647 19.3627 C 8.4508 18.9993 8.78134 18.7277 9.1756 18.6076 C 16.4168 16.4105 25.4189 17.4747 31.5737 21.2569 C 32.3046 21.7069 32.5356 22.664 32.0856 23.394 V 23.3938 Z M 32.2951 17.7405 C 25.8689 13.9236 15.2665 13.5726 9.13107 15.4347 C 8.14583 15.7335 7.10393 15.1774 6.80536 14.1921 C 6.66179 13.7188 6.71209 13.2078 6.94521 12.7715 C 7.17832 12.3353 7.57515 12.0094 8.04845 11.8657 C 15.0915 9.7276 26.7999 10.1407 34.1985 14.5328 C 34.4093 14.6576 34.5935 14.8227 34.7404 15.0187 C 34.8874 15.2147 34.9942 15.4378 35.0548 15.6752 C 35.1154 15.9126 35.1286 16.1596 35.0936 16.4021 C 35.0586 16.6446 34.9761 16.8778 34.8508 17.0883 C 34.327 17.9745 33.1794 18.2666 32.2961 17.7405 H 32.2951 Z"></path>
              </svg>
            </div>
            <div className="track">
              <div className="action">On Repeat</div>
              <div className="song">
                <a
                  href="https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod?si=0Qiw87eXSS-SrWSykLVgJg&context=spotify%3Aplaylist%3A6XNyQbHQcLfCKgaYS9DjTx"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Sparks by Coldplay
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="legal-content">© 2023 • TJ Ayoub</div>
        </div>
      </div>
      <ul className="list-elsewhere">
        <li class="h6">Elsewhere</li>
        <li class="list-item">
          <a
            href="https://github.com/tjoab"
            target="_blank"
            rel="nofollow noreferrer"
            class="list-item"
          >
            Github
          </a>
        </li>
        <li class="list-item">
          <a
            href="https://www.linkedin.com/in/tj-ayoub/"
            target="_blank"
            rel="nofollow noreferrer"
            class="list-item"
          >
            LinkedIn
          </a>
        </li>
        <li class="list-item">
          <a
            href="https://medium.com/@tj.ayoub"
            target="_blank"
            rel="nofollow noreferrer"
            class="list-item"
          >
            Medium
          </a>
        </li>
        <li class="list-item">
          <a
            href="https://500px.com/p/tjoab?view=photos"
            target="_blank"
            rel="nofollow noreferrer"
            class="list-item"
          >
            500px
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
