document.addEventListener("DOMContentLoaded", function () {

  // Construct Info Logic
  const constructs = document.querySelectorAll(".construct");
  const panel = document.querySelector("#infoPanel");
  const text = document.querySelector("#infoText");

  constructs.forEach(function (construct) {

    construct.addEventListener("click", function () {

      const info = construct.getAttribute("data-info");
      const current = text.getAttribute("value");

      if (panel.getAttribute("visible") && current === info) {

        panel.setAttribute("visible", false);
        text.setAttribute("visible", false);

      } else {

        panel.setAttribute("visible", true);
        text.setAttribute("value", info);
        text.setAttribute("visible", true);

      }

    });

  });

  // Alignment Challenge Logic
  const answers = document.querySelectorAll(".answer");

  answers.forEach(function (answer) {

    answer.addEventListener("click", function () {

      const correct = answer.getAttribute("data-correct");

      answers.forEach(a => a.setAttribute("color", "#DDDDDD"));

      if (correct === "true") {
        answer.setAttribute("color", "#8BC34A");
      } else {
        answer.setAttribute("color", "#F44336");
      }

    });

  });

});
