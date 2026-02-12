
document.addEventListener("DOMContentLoaded", function () {

  const construct = document.querySelector("#construct1");
  const panel = document.querySelector("#infoPanel");
  const text = document.querySelector("#infoText");

  construct.addEventListener("click", function () {

    const isVisible = panel.getAttribute("visible");

    if (!isVisible) {

      panel.setAttribute("visible", true);
      text.setAttribute("value",
        "Perceived Usefulness:\n\n" +
        "The degree to which a person believes that using a system enhances performance.\n\n" +
        "Often measured with Likert scale survey items in TAM studies."
      );
      text.setAttribute("visible", true);

    } else {

      panel.setAttribute("visible", false);
      text.setAttribute("visible", false);

    }

  });

});
