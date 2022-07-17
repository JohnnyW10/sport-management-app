function Flat() {
  const arr = [1,2,3,[4,5,6, [7,8,9]]]
  console.log(arr.flat(Infinity))
  flatMapp()
}

function flatMapp () {
  let arr = [3,6,9]

  //arr.map(x => [x, x*3])
  console.log(arr.flatMap(v => [v, v*2, v+1]))


  let entries = new Map([
    ['name', 'Jan'],
    ['Surname', 'Wolan']
  ])

  console.log(Object.fromEntries(entries))

  let greetings = '   Hello World !    '

  console.log(JSON.stringify(greetings.trimStart()))


  const ob1 = {name: 'John', arr: [{
    person: 'on'
  }]}
  const ob2 = {surname : 'Wolan'}

  const ob3 = {...ob1, ...ob2, role: 'Progrmammer'}
  console.log(ob3)

}


function padF() {
  const str1 = '1'
  console.log(str1.padStart(5, '-'))

  const pi = '3,14232442'
  let newN = pi
  console.log(newN.padEnd(20, '*'))
}