let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let sum = 0;



function select_dish(name, id, price) {


    let soup = document.getElementById('soup_p');
    let main_dish = document.getElementById('main_dish_p');
    let drink = document.getElementById('drink_p');

    option1 = document.querySelector(`select[name='${name}'] option[value='1']`);
    option2 = document.querySelector(`select[name='${name}'] option[value='2']`);
    option3 = document.querySelector(`select[name='${name}'] option[value='3']`);
    option1.removeAttribute('selected');
    option2.removeAttribute('selected');
    option3.removeAttribute('selected');
    option = document.querySelector(`select[name='${name}'] option[value='${id}']`);
    option.setAttribute('selected', true);
    

    if (name == 'soup'){
        soup_sum = price;
        soup.innerHTML=`${soup_array[id-1].name} - ${price} рублей`;
    }
    else if (name == 'main_dish'){
        main_dish_sum = price;
        main_dish.innerHTML=`${dishes_array[id-1].name} - ${price} рублей`;
    }
    else{
        drink_sum = price;
        drink.innerHTML=`${drinks_array[id-1].name} - ${price} рублей`;
    }

    sum = soup_sum + main_dish_sum + drink_sum;
    document.getElementById('order_h2').innerHTML = `Ваш заказ стоит ${sum} рублей`;
}

let soup_block = document.getElementById('soup')
let div_blocks = ''
soup_array.forEach(dish => {
    div_blocks += `
                    <div name="food_block" onclick="select_dish('${dish.category}', ${soup_array.indexOf(dish)+1}, ${dish.price});" data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button name="food_button">Добавить</button>
                    </div>
    `
});
soup_block.innerHTML = `
    <h2>Выберите суп</h2>
    <div>
    ${div_blocks}
    </div>
`

let main_dish_block = document.getElementById('main_dish')
div_blocks = ''
dishes_array.forEach(dish => {
    div_blocks += `
                    <div name="food_block" onclick="select_dish('${dish.category}', ${dishes_array.indexOf(dish)+1}, ${dish.price})" data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button name="food_button">Добавить</button>
                    </div>
    `
});
main_dish_block.innerHTML = `
    <h2>Выберите главное блюдо</h2>
    <div>
    ${div_blocks}
    </div>
`

let drink_block = document.getElementById('drink')
div_blocks = ''
drinks_array.forEach(dish => {
    div_blocks += `
                    <div name="food_block" onclick="select_dish('${dish.category}', ${drinks_array.indexOf(dish)+1}, ${dish.price})" data-dish="${dish.keyword}">
                    <img src="${dish.image}" alt="soup">
                    <p class="price">${dish.price} рублей</p>
                    <p class="name">${dish.name}</p>
                    <p class="mass">${dish.count}</p>
                    <button name="food_button">Добавить</button>
                    </div>
    `
});
drink_block.innerHTML = `
    <h2>Выберите напиток</h2>
    <div>
    ${div_blocks}
    </div>
`



window.onload = function() {
    let time_radio_buttons = document.getElementsByName('delivery-time-type');

    let del_time = document.getElementById('time-delivery-choice');

    let fast_button = time_radio_buttons[0].value == 1 ? time_radio_buttons[0] : time_radio_buttons[1]; //определяем кнопку "как можно быстрее"

    let time_required = document.getElementById('delivery-time');

    function check_as_fast() {
        
        if (fast_button.checked) {
            del_time.style.visibility = 'hidden';
            time_required.required = false; //убираем требование на присутствие времени, иначе невозможно отослать форму!
        } else {
            del_time.style.visibility = 'visible';
            time_required.required = true;
        }
    }

    time_radio_buttons.forEach(radio => { //добавляем listener на все наши radio input, при нажатии проверяется какая именно нажата (см. функцию check_as_fast() )
        radio.addEventListener('click', check_as_fast)
    });


    function reset_order() {
        let soup_p = document.getElementById('soup_p');
        let main_dish_p = document.getElementById('main_dish_p');
        let drink_p = document.getElementById('drink_p');

        soup_p.innerHTML = "-- Выберите суп --";
        main_dish_p.innerHTML = "-- Выберите главное блюдо --";
        drink_p.innerHTML = "-- Выберите напиток --";

        document.getElementById('order_h2').innerHTML = 'Ваш заказ';

        document.getElementById('nothing_is_chosen').style.display = 'block';
        document.getElementById('order_inputs').style.display = 'none';

        soup_sum = 0;
        main_dish_sum = 0;
        drink_sum = 0;
        sum = 0;
    }
    let reset_button = document.getElementById('reset');
    reset_button.addEventListener('click', reset_order)

    let div_dishes = document.getElementsByName('food_block');
    div_dishes.forEach(block => {
        block.addEventListener('click', show_order_inp)
    })

}

function show_order_inp() {
    let nothing = document.getElementById('nothing_is_chosen');
    let order_inps = document.getElementById('order_inputs');

    nothing.style.display = 'none';
    order_inps.style.display = 'block';
}



