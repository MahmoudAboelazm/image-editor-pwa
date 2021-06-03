export const showLoading = () => {
  const element = document.getElementsByClassName("btn-square")[0];
  const picker = document.getElementsByClassName("show-loading")[0];
  if (element.classList.contains("loading")) {
    picker.classList.add("hidden");
    element.classList.add("hidden");
    return element.classList.remove("loading");
  }

  picker.classList.remove("hidden");
  element.classList.remove("hidden");
  return element.classList.add("loading");
};
