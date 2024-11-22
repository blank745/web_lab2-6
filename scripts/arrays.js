let soup_array = [];
let dishes_array = [];
let drinks_array = [];
let salads_array = [];
let desserts_array = [];

function load_arrays(res){
    let i = -1
    for(let j = 0; j < res.length; j++){
        i += 1
        dish = res[j]
        dish['select_id'] = i
        if (dish['category'] == 'drink'){drinks_array.push(dish);}
        else if (dish['category'] == 'soup'){soup_array.push(dish)}
        else if (dish['category'] == 'main-course'){dish['category'] = 'main_dish'; dishes_array.push(dish)}
        else if (dish['category'] == 'salad'){salads_array.push(dish)}
        else {desserts_array.push(dish)}
    }
    load_all_blocks()
}



