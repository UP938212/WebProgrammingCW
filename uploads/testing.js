const textBox = document.querySelector("#in");
  const submitBtn = document.querySelector("#submit");

  function save() {
    localStorage.setItem("savedText", textBox.value);
  }

  function submit() {
    // let's assume we submit to the server here
    textBox.value = '';
    save();
  }