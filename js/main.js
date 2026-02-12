document.addEventListener("DOMContentLoaded", function () {

  const constructs = document.querySelectorAll(".construct");
  const panel = document.querySelector("#infoPanel");
  const text = document.querySelector("#infoText");

  constructs.forEach(function (construct) {

    construct.addEventListener("click", function () {

      const info = construct.getAttribute("data-info");

      panel.setAttribute("visible", true);
      text.setAttribute("value", info);
      text.setAttribute("visible", true);

    });

  });

});
