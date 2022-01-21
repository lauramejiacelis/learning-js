var name = "david";

function a() {
  var name = "paulo";

  function b(name) {
    console.log(name);
  }

  console.log(name)

  b("olivia");
}

a();
  console.log(name)
