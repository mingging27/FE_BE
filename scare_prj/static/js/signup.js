let radios = document.querySelectorAll(".sel");

for (let i = 0; i < 2; i++) {
  if (radios[i].checked) {
    let label = document.querySelector(`label[for=${radios[i].id}]`);
    label.style.border = "1px solid #C999F9";
  }
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    radios.forEach((r) => {
      let label = document.querySelector(`label[for=${r.id}]`);
      label.style.border = "1px solid black";
    });

    if (radio.checked) {
      let checkedLabel = document.querySelector(`label[for=${radio.id}]`);
      checkedLabel.style.border = "1px solid #C999F9";
    }
  });
});
