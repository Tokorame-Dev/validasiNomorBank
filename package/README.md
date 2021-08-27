# What is This?

Get number bank countries indonesia

# Installation

`npm i @teddir/validasinomorbank`


Mengambil Semua Data Bank...

```

import { namaBank } from '@teddir/validasinomorbank';

// looping dengan map atau forEach ext
namaBank.map((item) => {

  // ambil datanya atau tampilkan 
  console.log(item)
})

```

Identifikasi nomor Bank...

```

import { validateNomorBank } from '@teddir/validasinomorbank';

validateNomorBank(nomor_bank)

```


Validasi nama dan nomor Bank...

```

import { validateBank } from '@teddir/validasinomorbank';

validateBank(nama_bank, nomor_bank)

```
## options

validateBankId support 10 banks:
* PT. BANK BRI
* PT. BANK SYARIAH MANDIRI
* PT. BANK MANDIRI
* PT. BANK BCA
* PT. BANK BNI
* PT. BANK BNI SYARIAH
* PT. BANK BTN
* PT. BANK BTN SYARIAH
* PT. BANK DANAMON
* PT. BANK BUKOPIN