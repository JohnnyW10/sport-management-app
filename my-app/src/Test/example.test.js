
test('add 5 + 5 how much is it', () => {
  const data = {name: 'Jan'}
  data['Jan'] = 'Progrmista'
  expect(data).toEqual({name: 'Jan', Jan: 'Progrmista'})
})

test('use loop', () => {
  for(let i = 1; i < 5; i++){
    for(let j = 1; j < 5; j++) {
      expect(i + j).not.toBe(0);
    }
  }
})

test('check teh truth or not', () => {
  const answer = true;
  expect(answer).toBeTruthy()
})


//Truthiness
//In tests, you sometimes need to distinguish between undefined,
// null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.
test('check type of value', () => {
  const num = undefined;
  const num2 = null
  const num3 = 2

  expect(num).toBeUndefined()
  expect(num2).toBeNull()
  expect(num3).toBe(2)
  expect(num3).toBeDefined()
})


//numbers
//Most ways of comparing numbers have matcher equivalents.
test('Check value of 5*5', () => {
  const result = 5*5

  expect(result).toBeGreaterThan(20)
  expect(result).toBeGreaterThanOrEqual(25)
  expect(result).toBeLessThan(30)
  expect(result).toBeLessThanOrEqual(26)


  //For floating point
  const sum = 0.2 + 0.7

  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(sum).toBeCloseTo(0.9)
})


//string
//You can check strings against regular expressions with toMatch:
test('check string', () => {
  const goodbye = 'Goodbye my friend'
  const name = 'Jan'
  const name2 = 'Janek'
  
  expect(goodbye).toMatch('Goodbye my friend')
  expect(goodbye).not.toMatch('to say goodbye')
  expect(name).not.toMatch(name2)
})

//Arrays and iterables
//You can check if an array or iterable contains a particular item using toContain:
test('check arrays', () => {
  const arr = [
    'Mercedes',
    'Golf',
    'Audi',
    'Renault'
  ]

  expect(arr).toContain('Golf')
  expect(new Set(arr)).toContain('Mercedes')
  //Obiekt Set umożliwia przechowywanie unikalnych wartości każdego typu, zarówno primitywów (en-US) jak i obiektów.
})


//Exceptions
// If you want to test whether a particular function throws an error when it's called, use toThrow. 
function errorExample() {
  throw new Error('Bum bam')
}

test('error check', () => {
  expect(() => errorExample()).toThrow();
  expect(() => errorExample()).toThrow(Error)
})



// testing asynchronous code 
//Promises
//Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.
/*test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});*/
