let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let dessert_sum = 0;
let salad_sum = 0;  
let sum = 0;

let arr = null;   

let soup = document.getElementById('soup_p');
let main_dish = document.getElementById('main_dish_p');
let drink = document.getElementById('drink_p');
let dessert = document.getElementById('dessert_p');
let salad = document.getElementById('salad_p');



load_beverages_blocks()
load_main_dish_blocks()
load_soup_blocks()
load_salads()
load_desserts()


function select_dish(name, id, price) {


    if (name == 'soup') {arr = soups_array}
    else if (name == 'main_dish') {arr = dishes_array}
    else if (name == 'drink') {arr = drinks_array}
    else if (name == 'salad') {arr = salads_array}
    else if (name == 'dessert') {arr = desserts_array}

    arr.forEach(el => {
        document.querySelector(`select[name='${el.category}'] option[value='${el.select_id}']`).removeAttribute('selected')
    });
    option = document.querySelector(`select[name='${name}'] option[value='${id}']`);
    option.setAttribute('selected', true);

    if (name == 'soup'){
        soup_sum = price;
        soup.innerHTML=`${soups_array[id-1].name} - ${price} рублей`;
    }
    else if (name == 'main_dish'){
        main_dish_sum = price;
        main_dish.innerHTML=`${dishes_array[id-1].name} - ${price} рублей`;
    }
    else if (name == 'drink'){
        drink_sum = price;
        drink.innerHTML=`${drinks_array[id-1].name} - ${price} рублей`;
    }
    else if (name == 'dessert'){
        dessert_sum = price;
        dessert.innerHTML=`${desserts_array[id-1].name} - ${price} рублей`;
    }
    else if (name = 'salad'){
        salad_sum = price;
        salad.innerHTML=`${salads_array[id-1].name} - ${price} рублей`;
    }

    sum = soup_sum + main_dish_sum + drink_sum + dessert_sum + salad_sum;
    document.getElementById('order_h2').innerHTML = `Ваш заказ стоит ${sum} рублей`;
}




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
        soup_p.innerHTML = "-- Выберите суп --";
        main_dish_p.innerHTML = "-- Выберите главное блюдо --";
        drink_p.innerHTML = "-- Выберите напиток --";
        dessert_p.innerHTML = "-- Выберите дессерт --";
        salad_p.innerHTML = "-- Выберите салат/стартер --";

        document.getElementById('order_h2').innerHTML = 'Ваш заказ';

        document.getElementById('nothing_is_chosen').style.display = 'block';
        document.getElementById('order_inputs').style.display = 'none';

        arr = null;
        sum = 0;

        soup_sum = 0;
        main_dish_sum = 0;
        drink_sum = 0;
        dessert_sum = 0;
        salad_sum = 0;
    }
    let reset_button = document.getElementById('reset');
    reset_button.addEventListener('click', reset_order);



    /*let div_dishes = document.getElementsByName('food_block');
    div_dishes.forEach(block => {
        block.addEventListener('click', show_order_inp)
    })*/
}

function show_order_inp() {
    let nothing = document.getElementById('nothing_is_chosen');
    let order_inps = document.getElementById('order_inputs');

    nothing.style.display = 'none';
    order_inps.style.display = 'block';
}



