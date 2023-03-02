const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function() {
  const telefone = this.value.replace(/\D/g, "");
  this.value = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
});
