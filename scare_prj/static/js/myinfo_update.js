function loadFile(input) {
  let file = input.files[0];

  let newImage = document.getElementsByClassName("photo")[0];

  newImage.style.backgroundImage = "url(" + URL.createObjectURL(file) + ")";
  newImage.style.display = "flex";
  newImage.style.justifyContent = "center";
  newImage.style.alignItems = "center";

  let reImage = document.getElementsByClassName("re_photo")[0];

  reImage.style.backgroundImage = "url(" + URL.createObjectURL(file) + ")";
  reImage.style.display = "flex";
  reImage.style.justifyContent = "center";
  reImage.style.alignItems = "center";
}
