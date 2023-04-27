export default function animateCanvas() {
  let c = document.getElementById("canvas");
  let $ = c.getContext("2d");

  let col = function (x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + " )";
    $.fillRect(x, y, 1, 1);
  };

  let R = function (x, y, t) {
    return 15 + Math.floor(30 * Math.cos((x * x - y * y) / 300 + t));
  };

  let G = function (x, y, t) {
    return (
      67 +
      Math.floor(
        30 *
          Math.sin((x * x * Math.cos(t / 67) + y * y * Math.sin(t / 3)) / 300)
      )
    );
  };

  let B = function (x, y, t) {
    return (
      25 +
      Math.floor(
        15 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
      )
    );
  };

  let t = 0;

  let run = function () {
    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.05;
    window.requestAnimationFrame(run);
  };

  run();
}
