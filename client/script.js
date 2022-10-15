let url = "http://localhost:3001/api"



function BackEnd() {
    axios.get(url)
        .then(res => reload(res.data))

}
BackEnd()



let create_box = document.querySelectorAll('#create_box')
let cont_main = document.querySelectorAll('.cont_main')
let limit = {
    limit_a: 4,
    limit_b: 4,
    limit_c: 4
}





function reload(arr) {
    create_box.forEach(create => {
        create.innerHTML = ''
    })
    let count = {
        a: 0,
        b: 0,
        c: 0
    }

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

        cont_main.forEach(swap => {
            swap.lastElementChild.onclick = () => {
                console.log(swap.lastElementChild.getAttribute('name'));
                if (swap.lastElementChild.getAttribute('name') === '1') {
                    if (swap.lastElementChild.innerHTML === "Показать все") {
                        swap.lastElementChild.innerHTML = "Свернуть"
                        limit.limit_a = Infinity
                    } else if (swap.lastElementChild.innerHTML === "Свернуть") {
                        swap.lastElementChild.innerHTML = "Показать все"
                        limit.limit_a = 4
                    }
                } else if (swap.lastElementChild.getAttribute('name') === '2') {
                    if (swap.lastElementChild.innerHTML === "Показать все") {
                        swap.lastElementChild.innerHTML = "Свернуть"
                        limit.limit_b = Infinity

                    } else if (swap.lastElementChild.innerHTML === "Свернуть") {
                        swap.lastElementChild.innerHTML = "Показать все"
                        limit.limit_b = 4
                    }
                } else if (swap.lastElementChild.getAttribute('name') === '3') {
                    if (swap.lastElementChild.innerHTML === "Показать все") {
                        swap.lastElementChild.innerHTML = "Свернуть"
                        limit.limit_c = Infinity
                    } else if (swap.lastElementChild.innerHTML === "Свернуть") {
                        swap.lastElementChild.innerHTML = "Показать все"
                        limit.limit_c = 4
                    }
                }
                BackEnd()
            }

        })
        let less = 2022 - item.date
        if (less <= 15) {
            count.a++
            if (count.a <= limit.limit_a) {
                create_box[0].append(box)
            }
        }
        else if (less > 15 && less <= 25) {
            count.b++
            if (count.b <= limit.limit_b) {
                create_box[1].append(box)
            }
        } else if (less > 25) {
            count.c++
            if (count.c <= limit.limit_c) {
                create_box[2].append(box)
            }
        }
    }
}
