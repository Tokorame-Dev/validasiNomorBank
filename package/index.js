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
    "name": "PT. BANK SYARIAH MANDIRI"
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
    "code": "bca",
    "name": "PT. BANK BCA"
  },
  {
    "id": 5,
    "digit": 10,
    "code": "bni_syariah",
    "name": "PT. BANK BNI SYARIAH"
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

function validateBank(str, number = '') {
  let nilai = [];

  nameBank.forEach((item) => {
    // cek apakah dia number
    if (typeof str === "number") {

      // cek apakah panjang str sama dengan digit data bank
      if (str.toString().length === item.digit) {

        // tampilkan semua data sesuai panjang str  
        nilai.push([item.code, item.name])
      }
    } else {
      // cek code dan name bank all
      if (item.code.includes(str.toLowerCase()) || item.name.toLowerCase().includes(str.toLowerCase())) {

        // cek apakah ia menginput nomor bank 
        if (number <= 0) {
          return console.log('nomor bank wajib diisi')
        }
        // cek apakah nomor tersebut valid dengan nama bank yang dipilih
        if (number.length === item.digit) {

          // cek code / nomor dan name bank spesifik
          if (item.code.includes(str.toLowerCase()) || item.name.toLowerCase().includes(str.toLowerCase()) && number.length === item.digit) {
            console.log('Nomor bank valid')
            nilai.push([item.code, item.name])
          }

        }
      }
    }
  })

  if (nilai.length > 0) {
    return true
  } else {
    return false
  }

}

function validateNomorBank(nomorBank) {
  // buat reqex khusus nomor
  let req = /[^0-9]/

  // cek nomor bank apakah mengandung selain nomor
  if (req.test(nomorBank) === false) {
    return validateBank(parseInt(nomorBank))
  } else {

    // console.log('Nomor bank tidak ditemukan')
    return false
  }
}

module.exports.validateNomorBank = validateNomorBank
module.exports.validateBank = validateBank
module.exports.nameBank = nameBank