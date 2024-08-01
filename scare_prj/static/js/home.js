document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector(".month tbody");

  table.querySelectorAll("tr").forEach((row) => {
    const sunday = row.children[0]; // 일요일
    const saturday = row.children[6]; // 토요일

    if (sunday) {
      sunday.style.color = "red";
    }

    if (saturday) {
      saturday.style.color = "blue";
    }
  });
});
