function handleStart (e) {
  console.log(e);
}

function init() {
  document.addEventListener("touchstart", handleStart, false);
}

init();
