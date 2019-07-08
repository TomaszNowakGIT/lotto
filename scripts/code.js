function getlotto(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }
var arr = [];
for(var i = 0; i < 6;i++){
  var numery = getlotto(1,49)
  arr.push((getlotto(1,49)))
  document.getElementById('container').innerHTML += '<div class="result">' + (arr[i]) + '</div>';
}

