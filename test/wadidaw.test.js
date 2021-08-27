const { validateBank } = require('../package/index')

let name = 'PT. BANK BRI'
let nomor = '1234567890'
console.log(validateBank(name, nomor))

test('should ', () => {
  expect(validateBank(name, nomor)).toBe(false);

})
