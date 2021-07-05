function validateBankId(str, number) {
  const nameBank = [
    {
      "id": 1,
      "digit": 15,
      "code": "bri",
      "name": "PT. BANK BRI"
    },
    {
      "id": 2,
      "digit": 10,
      "code": "bsm",
      "name": "PT. BANK BRI SYARIAH"
    },
    {
      "id": 3,
      "digit": 13,
      "code": "mandiri",
      "name": "PT. BANK MANDIRI"
    },
    {
      "id": 4,
      "digit": 10,
      "code": "mandiri_syariah",
      "name": "PT. BANK MANDIRI SYARIAH"
    },
    {
      "id": 5,
      "digit": 10,
      "code": "bca",
      "name": "PT. BANK BCA"
    },
    {
      "id": 6,
      "digit": 10,
      "code": "bni",
      "name": "PT. BANK BNI"
    },
    {
      "id": 7,
      "digit": 16,
      "code": "btn",
      "name": "PT. BANK BTN"
    },
    {
      "id": 8,
      "digit": 10,
      "code": "btn_syariah",
      "name": "PT. BANK BTN SYARIAH"
    },
    {
      "id": 9,
      "digit": 10,
      "code": "danamon",
      "name": "PT. BANK DANAMON"
    },
    {
      "id": 10,
      "digit": 10,
      "code": "bukopin",
      "name": "PT. BANK BUKOPIN"
    }
  ]

  let bank = [];
  let newnumber = Object.entries(number)
  let newStr = str.split(' ')

  // map atau loop name bank
  nameBank.map((item) => {
    if (newStr.includes(item.code) || newStr.includes(item.name)) {

      // cek apakah digit nomor bank valid 
      if (newnumber.length !== item.digit) {
        console.log('Maaf nomor bank tidak valid')
      } else {
        item.nomor_bank = number
        bank.push(item)
        console.log(item)
      }
    }
  })
  // console.log(bank)
  if (bank === []) {
    console.log('Maaf nama banks tidak ditemukan')
  } return bank
}

module.exports.validateBankId = validateBankId