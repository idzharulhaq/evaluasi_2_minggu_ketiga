// soal 1
function angkaromawi(id) {
    switch (id) {
        case 1: console.log('I')
            break
        case 2: console.log('II')
            break
        case 3: console.log('III')
            break
        case 4: console.log('IV')
            break
        case 5: console.log('V')
            break
        case 6: console.log('VI')
            break
        case 7: console.log('VII')
            break
        case 8: console.log('VIII')
            break
        case 9: console.log('IX')
            break
        case 10: console.log('x')
        default: ('yang anda masukan bukan angka!')
    }
}

// soal 2

function positivenegative(arr) {
    let positive = []
    let negative = []
    for (let index in arr) {
        if (arr[index] <= 0) {
            positive.push(arr[index])
        } else {
            negative.push(arr[index])
        }
    }
    return [positive, negative]
}

console.log(positivenegative([-1, 4, 9, 0, -6, -7, 10, 100, -99, -10000]))

// soal 3

function ratarata(index) {

}

// soal 4
const bookself = [
    {
        id: 1,
        title: 'kalkulus jilid 1',
        genre: ["matematika dasar,pendidikan"],
        author: 'jun',
        isborrow: false
    }
]
// 1.menambahkan data buku baru
function bookself(id, title, genre, author, isborrow) {
    bookself.unshift({
        id: +new Date(),
        title,
        genre,
        author,
        isborrow: false
    })
}
//5.menghapus buku berdasarkan id
function bookself(id) {
    for (let index in bookself) {
        if (bookself[index].id == id) {
            bookself.splice(index, 1)
        }
    }
}
