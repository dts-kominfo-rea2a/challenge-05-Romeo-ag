const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (inArray,fnCallback)=>{
  // console.log(inArray);
  // console.log(inArray.sort());
  // console.log(inArray.reverse());
  let result = [];
  let sortedArray = fnCallback(inArray);
  // console.log(sortedArray)
  for(i =0; i<sortedArray.length; i++){
    result.push(i+1+ ". " + sortedArray[i]);
  }
  return result;

};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (inArray)=>{
  // console.log(inArray.sort());
  return inArray.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (inArray)=>{
  return inArray.reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
