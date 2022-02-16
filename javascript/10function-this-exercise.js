var obj = {
  name: "Laura",
  sayHi: function () {
    console.log(`Hi my name is ${this.name}`);
  },
};

function test(cb) {
  cb();
}

test(obj.sayHi.bind(obj));
