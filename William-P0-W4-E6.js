function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var hasilBagi = Number
  var cage =[]
  var result =[]
  for (var i=1; i<=angka;i++){
    var cage =[]
    if (angka%i === 0) {
      hasilBagi = angka/i
      cage.push(i)
      cage.push(hasilBagi)
      result.push(cage)
    }
  }
  var cage2 =[]
  for (var j=0;j<result.length;j++){
    var count1 = result[j][0].toString().length
    var count2 = result[j][1].toString().length
    var count3 = count1+count2
    cage2.push(count3)
  }
  var jawab = Math.min.apply(null, cage2)
  return jawab
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2