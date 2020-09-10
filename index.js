/*
JavaScript Conditional
Dua Contitianal Javascript : 1. If Else dan Else
                            2. Switch Case
conditional If Else 
*/

// let nilaiAndi = 95;

// if (nilaiAndi > 80) {
//   console.log("SANGAT MEMUASKAN");
// } else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
//   console.log("MEMUASKAN");
// } else {
//   console.log("JANGAN MENYERAH, COBA LAGI!");
// }



/*
conditional Swicth danCase
*/

// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah);

/*
contoh kita di atas, murid diharuskan mengenakan seragam "kemeja putih bawahan merah" untuk hari "senin" sampai "kamis",
maka kita bisa mengubah kode di atas menjadi:
*/

// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//   case "selasa":
//   case "rabu":
//   case "kamis":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah);

/*
For Loop Menanpilkan angka 1 sampai 100
*/
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
  
/*
For in Loop 
*/  
// const buku = {
//     judul: "Harry Potter and The Philosopher's Stone",
//     pengarang: "J. K. Rowling",
//     tahun: 1997
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }

 /*
For/Of Loop
*/  

// const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];

// for (x of buku) {
//   console.log(x);
// }

 /*
While Loop Menampilkan angka 1 sampai 50
*/  

// let i = 1;

// while (i <= 150 {
//   console.log(i);
//   i++;
// }


 /*
Do While Loop Menampilkan angka 1 sampai 30
*/  

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 30);
