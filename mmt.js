function mmt(r, cb) {
  if (r == 'rajeev') {
    if (typeof cb == 'function') {
      cb('abc');
    } 
  } else {
    cb('xyz');
  }
}

mmt('mmt', function (name) {
  console.log(name);
})

mmt('rajeev', function (name) {
  console.log(name);
})