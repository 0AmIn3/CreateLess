let url = "http://localhost:3001/api"
let create_box = document.querySelectorAll('#create_box')

create_box[0].nextElementSibling.firstChild

function BackEnd() {
    axios.get(url)
        .then(res => {
            let arr15 = []
            let arr25 = []
            let other = []

            for (let item of res.data) {
                let less = new Date().getFullYear() - item.date
                if (less <= 15) {
                    arr15.push(item)
                } else if (less > 15 && less <= 25) {
                    arr25.push(item)

                } else {
                    other.push(item)
                }
            }

            reload(arr15, create_box[0], 4, true)
            reload(arr25, create_box[1], 4, true)
            reload(other, create_box[2], 4, true)
        })

}
BackEnd()






function reload(arr, place, limit, swap) {
    place.innerHTML = ''
    let count = limit - 1
    let check = swap
    for (let item of arr) {
        let box = document.createElement('div')
        let h1 = document.createElement('h1')
        let span = document.createElement('span')
        let span_2 = document.createElement('span')
        let button = document.createElement('button')

        box.classList.add('box')
        button.classList.add('info_bts')
        h1.innerHTML = item.title
        span.innerHTML = 'VIN : ' + item.vin
        span_2.innerHTML = 'Year : ' + item.date
        button.innerHTML = "Подробнее"

        box.append(h1, span, span_2, button)

        if (arr.indexOf(item) <= count) {
            place.append(box)
        }
    }
    place.nextElementSibling.firstChild.onclick = () => {
        let aa = place.nextElementSibling.getAttribute('data-index')
        console.log(aa);
        if (check === true) {
            reload(arr, create_box[Number(aa)], Infinity, false)
            place.nextElementSibling.firstChild.innerHTML = 'Свернуть'
        } else if (check === false) {
            reload(arr, create_box[Number(aa)], 4, true)
            place.nextElementSibling.firstChild.innerHTML = 'Показать все'
        }
    }
}