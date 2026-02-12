document.addEventListener("DOMContentLoaded", function () {

  // ===== CONSTRUCT INFO LOGIC =====
// ===== CONSTRUCT INFO LOGIC =====
  const constructs = document.querySelectorAll(".construct");
  const infoPanel = document.querySelector("#infoPanel");
  const infoText = document.querySelector("#infoText");
  
  constructs.forEach(function (construct) {
  
    construct.addEventListener("click", function () {
  
      const info = construct.getAttribute("data-info");
  
      // Reset all construct colors
      constructs.forEach(c => c.setAttribute("color", "#B0BEC5"));
  
      // Highlight clicked construct
      construct.setAttribute("color", "#4CAF50");
  
      // Show info
      infoPanel.setAttribute("visible", true);
      infoText.setAttribute("value", info);
      infoText.setAttribute("visible", true);
  
    });
  
  });



  // ===== ALIGNMENT CHALLENGE LOGIC =====
  const answers = document.querySelectorAll(".answer");
  const feedbackPanel = document.querySelector("#feedbackPanel");
  const feedbackText = document.querySelector("#feedbackText");

  answers.forEach(function (answer) {

    answer.addEventListener("click", function () {

      const correct = answer.getAttribute("data-correct");

      // Reset all answer colors
      answers.forEach(a => a.setAttribute("color", "#DDDDDD"));

      if (correct === "true") {

        answer.setAttribute("color", "#8BC34A");

        feedbackPanel.setAttribute("visible", true);
        feedbackText.setAttribute("visible", true);
        feedbackText.setAttribute("value",
          "Correct. TAM directly models perceived usefulness and ease of use predicting behavioral intention."
        );

      } else {

        answer.setAttribute("color", "#F44336");

        feedbackPanel.setAttribute("visible", true);
        feedbackText.setAttribute("visible", true);
        feedbackText.setAttribute("value",
          "Not quite. This purpose focuses on usefulness and ease of use predicting intention. That aligns with TAM."
        );

      }

    });

  });

});
