soup_array = [
{
        
    keyword: 'gaspacho',
    name: 'Гаспачо',
    price: 195,
    category: 'soup',
    count: '350 г',
    image: 'media/gazpacho.jpg',
    select_id: 1
}, 



{
        
    keyword: 'mushroom_soup',
    name: 'Грибной суп-пюре',
    price: 185,
    category: 'soup',
    count: '330 г',
    image: 'media/mushroom_soup.jpg',
    select_id: 2
}, 
{
        
    keyword: 'norwegian_soup',
    name: 'Норвежский суп',
    price: 270,
    category: 'soup',
    count: '330 г',
    image: 'media/norwegian_soup.jpg',
    select_id: 3
}, 



];

dishes_array = [
    {
        
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_dish',
        count: '310 г',
        image: 'media/lasagna.jpg',
        select_id: 2
    }, 
    {
        
        keyword: 'chickencutletsandmashedpotatoes',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_dish',
        count: '280 г',
        image: 'media/chickencutletsandmashedpotatoes.jpg',
        select_id: 3
    }, 
    {
        keyword: 'friedpotatoeswithmushrooms1',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_dish',
        count: '250 г', 
        image: 'media/friedpotatoeswithmushrooms1.jpg',
        select_id: 1
    }
    
]

drinks_array = [
    {
        
        keyword: 'applejuice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'media/applejuice.jpg',
        select_id: 2
    }, 
    {
        
        keyword: 'carrotjuice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'media/carrotjuice.jpg',
        select_id: 3
    },
    {
        
        keyword: 'orangejuice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 г',
        image: 'media/orangejuice.jpg',
        select_id: 1
    }, 
]

dishes_array.sort((a, b) => a.name.localeCompare(b.name));

soup_array.sort((a, b) => a.name.localeCompare(b.name));

drinks_array.sort((a, b) => a.name.localeCompare(b.name));
