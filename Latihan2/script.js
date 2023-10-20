function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (nama === "" || email === "" || password === "") {
    alert("Semua field harus diisi!");
    return false;
  }

  // Add other validation logic here as needed

  return true;
}
