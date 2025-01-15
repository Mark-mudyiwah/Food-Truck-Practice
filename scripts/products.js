


export function getProduct(productId){
    let matchingProduct;

    products.forEach((product)=>{
        if(product.id === productId){
          matchingProduct = product
        
        }
      
       })
       
    return matchingProduct
};

 
export let products = [
    {
        id: '11abc-x23y-tz5u',
        image: "images/product-images/vegan-burger.jpeg",
        image1: "images/product-images/vegan-burger-1.jpeg",
        image2:"images/product-images/vegan-burger-2.jpeg",
        image3:"images/product-images/vegan-burger-3.jpeg",
        name: 'Vegan Burger',
        price: 40,
        info: "A plant-based burger patty topped with fresh lettuce, tomato, and vegan mayo. Served on a whole-grain bun for a healthier choice. Packed with protein and fiber, this burger is both satisfying and nutritious. Perfect for those seeking a meat-free alternative without compromising on flavor. Enjoy with a side of sweet potato fries for a complete meal. Ideal for health-conscious diners and vegans alike.",
        keywords: ['vegan', 'burger', 'plant-based', 'healthy', 'lettuce', 'whole-grain']
    },
    {
        id: '12def-v45j-nz7q',
        image: "images/product-images/fish-tacos.jpeg",
        image1: "images/product-images/fish-tacos-1.jpeg",
        image2:"images/product-images/fish-tacos-2.jpeg",
        image3:"images/product-images/fish-tacos-3.jpeg",
        name: 'Fish Tacos',
        price: 55,
        info: "Crispy battered fish fillets with fresh salsa, shredded cabbage, and tangy chipotle sauce, all wrapped in a soft tortilla. The perfect balance of textures and flavors, these tacos are a seafood lover's dream. Garnished with a squeeze of lime for added zest. Great for lunch or dinner. Pair with a cold beverage for the ultimate dining experience.",
        keywords: ['fish', 'tacos', 'crispy', 'salsa', 'chipotle', 'seafood']
    },
    {
        id: '13ghi-z12x-bw4p',
        image: "images/product-images/grilled-cheese-sandwich.jpeg",
        image1: "images/product-images/grilled-cheese-sandwich-1.jpeg",
        image2:"images/product-images/grilled-cheese-sandwich-2.jpeg",
        image3:"images/product-images/grilled-cheese-sandwich-3.jpeg",
        name: 'Grilled Cheese Sandwich',
        price: 30,
        info: "A classic sandwich with melted cheddar and mozzarella cheese, grilled to perfection on buttery bread. Crispy on the outside and gooey on the inside, this sandwich is a comforting favorite. Served with a side of tomato soup for the ultimate pairing. Ideal for kids and adults alike. A quick and satisfying meal option.",
        keywords: ['grilled cheese', 'sandwich', 'cheddar', 'mozzarella', 'buttery']
    },
    {
        id: '14jkl-q89m-cz3v',
        image: "images/product-images/loaded-nanchos.jpeg",
        image1: "images/product-images/loaded-nachos-1.jpeg",
        image2:"images/product-images/loaded-nachos-2.jpeg",
        image3:"images/product-images/loaded-nachos-3.jpeg",
        name: 'Loaded Nachos',
        price: 45,
        info: "Crispy tortilla chips topped with melted cheese, jalapeños, salsa, guacamole, and sour cream. Perfect for sharing at parties or enjoying as a hearty snack. Add chicken or beef for an extra protein boost. A crowd-pleaser that combines bold flavors and satisfying textures. Served fresh and hot.",
        keywords: ['nachos', 'tortilla', 'cheese', 'salsa', 'snack', 'chips']
    },
    {
        id: '15mno-y34t-dx9w',
        image: "images/product-images/mediterranean-salad.jpeg",
        image1: "images/product-images/mediterranean-salad-1.jpeg",
        image2:"images/product-images/mediterranean-salad-2.jpeg",
        image3:"images/product-images/mediterranean-salad-3.jpeg",
        name: 'Mediterranean Salad',
        price: 35,
        info: "A fresh and healthy salad with mixed greens, cherry tomatoes, cucumber, red onion, feta cheese, and olives, drizzled with a tangy vinaigrette. Packed with flavors reminiscent of the Mediterranean coast. Perfect for a light lunch or as a side dish. Enjoy with a slice of warm pita bread. A vegetarian delight that's both wholesome and tasty.",
        keywords: ['salad', 'mediterranean', 'healthy', 'greens', 'feta', 'vinaigrette']
    },
    {
        id: '16pqr-u89k-lz6v',
        image: "images/product-images/buffalo-chicken-wrap.jpeg",
        image1: "images/product-images/buffalo-chicken-wrap-1.jpeg",
        image2:"images/product-images/buffalo-chicken-wrap-2.jpeg",
        image3:"images/product-images/buffalo-chicken-wrap-3.jpeg",
        name: 'Buffalo Chicken Wrap',
        price: 40,
        info: "Tender buffalo chicken strips with lettuce, tomatoes, and ranch dressing, all wrapped in a soft tortilla. A spicy and savory option for lunch or dinner. Balanced with the coolness of ranch dressing. Easy to eat on the go. Served with a side of fries or a salad for a complete meal.",
        keywords: ['chicken', 'buffalo', 'wrap', 'ranch', 'spicy', 'snack']
    },
    {
        id: '17stu-v12y-xm4z',
        image: "images/product-images/fallafel-wrap.jpeg",
        image1: "images/product-images/fallafel-wrap-1.jpeg",
        image2:"images/product-images/fallafel-wrap-2.jpeg",
        image3:"images/product-images/fallafel-wrap-3.jpeg",
        name: 'Falafel Wrap',
        price: 38,
        info: "Crispy falafel balls, fresh vegetables, and tahini sauce wrapped in a warm tortilla for a delicious vegan option. Packed with protein and full of Mediterranean flavors. Ideal for a quick lunch or light dinner. A satisfying choice for vegans and vegetarians alike. Great for pairing with a side of hummus or a fresh salad.",
        keywords: ['falafel', 'vegan', 'wrap', 'tahini', 'vegetables']
    },
    {
        id: '18vwx-w45m-np2j',
        image: "images/product-images/vegetarian-quesadilla.jpeg",
        image1: "images/product-images/vegetarian-quesadilla-1.jpeg",
        image2:"images/product-images/vegetarian-quesadilla-2.jpeg",
        image3:"images/product-images/vegetarian-quesadilla-3.jpeg",
        name: 'Vegetarian Quesadilla',
        price: 35,
        info: "Grilled quesadilla stuffed with cheese, sautéed vegetables, and a side of salsa for dipping. A hearty vegetarian option that's full of flavor. Enjoy as a snack, appetizer, or main dish. Best paired with guacamole or sour cream. A favorite for cheese lovers and vegetarians alike.",
        keywords: ['quesadilla', 'vegetarian', 'cheese', 'sautéed', 'salsa', 'grilled']
    },
    {
        id: '19yza-x78n-lp9q',
        image: "images/product-images/spicy-chicken-wings.jpeg",
        image1: "images/product-images/spicy-chicken-wings-1.jpeg",
        image2:"images/product-images/spicy-chicken-wings-2.jpeg",
        image3:"images/product-images/spicy-chicken-wings-3.jpeg",
        name: 'Spicy Chicken Wings',
        price: 50,
        info: "Juicy chicken wings tossed in a spicy sauce, served with a side of cooling ranch dressing. Perfect for game days or casual gatherings. Crispy on the outside and tender on the inside. Add extra sauce for more heat. A satisfying choice for spice lovers.",
        keywords: ['chicken', 'wings', 'spicy', 'sauce', 'ranch']
    },
    {
        id: '20bcd-y45l-mz8n',
        image: "images/product-images/caesar-salad-wrap.jpeg",
        image1: "images/product-images/caesar-salad-wrap-1.jpeg",
        image2:"images/product-images/caesar-salad-wrap-2.jpeg",
        image3:"images/product-images/caesar-salad-wrap-3.jpeg",
        name: 'Caesar Salad Wrap',
        price: 40,
        info: "Crisp romaine lettuce, parmesan cheese, and grilled chicken tossed in Caesar dressing, wrapped in a soft tortilla. A convenient twist on a classic salad. Great for lunch or a light dinner. Balanced and flavorful, with the perfect combination of crunch and creaminess.",
        keywords: ['wrap', 'caesar', 'chicken', 'parmesan', 'lettuce', 'salad']
    },
    {
        id: '21efg-z12y-xn9v',
        image: "images/product-images/sweet-potato-fries.jpeg",
        image1: "images/product-images/sweet-potato-fries-1.jpeg",
        image2:"images/product-images/sweet-potato-fries-2.jpeg",
        image3:"images/product-images/sweet-potato-fries-3.jpeg",
        name: 'Sweet Potato Fries',
        price: 30,
        info: "These crispy, golden sweet potato fries are seasoned with a perfect blend of paprika and herbs, offering a delicious balance of flavors. Ideal as a side dish to any meal or as a stand-alone snack, they deliver a satisfying crunch with every bite. Perfect for those who enjoy a healthy twist on a classic favorite.",
        keywords: ['fries', 'sweet potato', 'crispy', 'snack', 'side']
    },
    
    {
        id: '2gfd-e34d-ca3e',
        image: "images/product-images/gourmet-burger.jpg",
        image1: "images/product-images/gourmet-burger-1.jpeg",
        image2:"images/product-images/gourmet-burger-2.jpeg",
        image3:"images/product-images/gourmet-burger-3.jpeg",
        name: 'Gourmet Burger',
        price: 50,
        info: "Indulge in our Gourmet Burger, crafted with a premium beef patty that is juicy and tender. It's complemented by fresh, crisp lettuce, ripe tomatoes, and artisanal cheese, all topped with our special sauce for an added burst of flavor. Served on a toasted brioche bun, this burger is a decadent treat that's perfect for any occasion.",
        keywords: ['beef', 'burger', 'gourmet', 'premium', 'brioche', 'special sauce']
    },
    
    {
        id: '5hgf-ty67-dv4c',
        image: "images/product-images/Everyday-burger.jpg",
        image1: "images/product-images/Everyday-burger-1.jpg",
        image2: "images/product-images/Everyday-burger-2.jpg",
        image3: "images/product-images/Everyday-burger-3.jpg",
        name: 'Everyday Burger',
        price: 45,
        info: "The Everyday Burger is a timeless classic, featuring a juicy beef patty layered with crisp pickles and onions, creating the perfect balance of tangy and savory flavors. Whether you're enjoying it for lunch or dinner, this burger is a satisfying and dependable choice, sure to hit the spot every time.",
        keywords: ['beef', 'burger', 'classic', 'pickles', 'onions', 'lunch', 'dinner']
    },
    {
        id: '3jkl-u78g-bn9a',
        image: "images/product-images/chicken-burger.jpg",
        image1: "images/product-images/chicken-burger-1.jpg",
        image2: "images/product-images/chicken-burger-2.jpg",
        image3: "images/product-images/chicken-burger-3.jpg",
        name: 'Chicken Burger',
        price: 45,
        info: "Our Chicken Burger features a marinated, grilled chicken breast that's tender and flavorful. It's complemented by fresh greens and a tangy mayo that enhances the natural taste of the chicken. Perfect for those seeking a lighter, yet satisfying meal, this burger is a great option for health-conscious diners. Pair it with fries or a refreshing salad for a complete meal.",
        keywords: ['chicken', 'burger', 'grilled', 'health-conscious', 'mayo', 'salad']
    },
    {
        id: '9mno-p45h-qe3b',
        image: "images/product-images/hot-dog.jpg",
        image1: "images/product-images/hot-dog-1.jpg",
        image2: "images/product-images/hot-dog-2.jpg",
        image3: "images/product-images/hot-dog-3.jpg",
        name: 'Hot Dog',
        price: 59,
        info: "Savor the classic comfort of our Hot Dog, featuring a juicy sausage nestled in a soft, pillowy bun. Topped with your choice of mustard, ketchup, and relish, this snack is perfect for any occasion. Whether you're enjoying it on a game day or as a quick lunch, it’s a crowd-pleaser that never disappoints.",
        keywords: ['sausage', 'hot dog', 'classic', 'mustard', 'ketchup', 'snack']
    },
    {
        id: '22hij-x34m-lz7q',
        image: "images/product-images/chilli-cheese-fries.jpeg",
        image1: "images/product-images/chilli-cheese-fries-1.jpeg",
        image2: "images/product-images/chilli-cheese-fries-2.jpeg",
        image3: "images/product-images/chilli-cheese-fries-3.jpeg",
        name: 'Chili Cheese Fries',
        price: 40,
        info: "Crispy fries topped with hearty chili and melted cheese, creating the perfect comfort food dish. Ideal for sharing with friends or enjoying as a fulfilling main course, these fries are the ultimate indulgence. The savory chili combined with the creamy cheese makes every bite a satisfying experience.",
        keywords: ['fries', 'chili', 'cheese', 'hearty', 'snack', 'shareable']
    },
    {
        id: '23klm-y56n-op8v',
        image: "images/product-images/lemon-iced-tea.jpeg",
        image1: "images/product-images/lemon-iced-tea-1.jpeg",
        image2: "images/product-images/lemon-iced-tea-2.jpeg",
        image3: "images/product-images/lemon-iced-tea-3.jpeg",
        name: 'Lemon Iced Tea',
        price: 20,
        info: "Our Lemon Iced Tea is the perfect combination of refreshing and tangy. Made with real lemons and lightly sweetened, it's the ideal drink to cool off on a warm day. With its crisp, clean taste, this iced tea offers a burst of citrusy goodness that will leave you feeling refreshed and revitalized.",
        keywords: ['iced tea', 'lemon', 'refreshing', 'drink', 'tangy']
    },
    {
        id: '24nop-z78k-lp3j',
        image: "images/product-images/berry-smoothie.jpeg",
        image1: "images/product-images/berry-smoothie-1.jpeg",
        image2: "images/product-images/berry-smoothie-2.jpeg",
        image3: "images/product-images/berry-smoothie-3.jpeg",
        name: 'Berry Smoothie',
        price: 35,
        info: "A creamy, smooth blend of fresh berries, yogurt, and a touch of honey, our Berry Smoothie is the perfect way to satisfy your sweet cravings while getting a dose of vitamins. The smooth texture combined with the sweet and tart flavors makes for a refreshing and delicious drink that's perfect any time of day.",
        keywords: ['smoothie', 'berry', 'yogurt', 'drink', 'creamy']
    },
    {
        id: '25qrs-w34m-xz6n',
        image: "images/product-images/tropical-fruit-juice.jpeg",
        image1: "images/product-images/tropical-fruit-juice-1.jpeg",
        image2: "images/product-images/tropical-fruit-juice-2.jpeg",
        image3: "images/product-images/tropical-fruit-juice-3.jpeg",
        name: 'Tropical Fruit Juice',
        price: 25,
        info: "Our Tropical Fruit Juice is a vibrant and flavorful drink made with a blend of ripe mangoes, pineapples, and oranges. This refreshing beverage is perfect for quenching your thirst while enjoying the tropical taste of exotic fruits. It's a great way to stay refreshed and hydrated, no matter the time of day.",
        keywords: ['juice', 'tropical', 'mango', 'pineapple', 'refreshing', 'drink']
    },
    {
        id: '26tuv-y45l-np8v',
        image: "images/product-images/mint-lemmonade.jpeg",
        image1: "images/product-images/mint-lemmonade-1.jpeg",
        image2: "images/product-images/mint-lemmonade-2.jpeg",
        image3: "images/product-images/mint-lemmonade-3.jpeg",
        name: 'Mint Lemonade',
        price: 18,
        info: "Cool off with our Mint Lemonade, a zesty drink that combines the bright, tangy flavor of fresh lemons with the refreshing taste of mint. It's the perfect balance of sweet and sour, offering a revitalizing taste that's both cooling and invigorating. A must-have for a hot summer day.",
        keywords: ['lemonade', 'mint', 'refreshing', 'drink', 'zesty']
    },
    {
        id: '27wxy-z67m-op3q',
        image: "images/product-images/garlic-bread-sticks.jpeg",
        image1: "images/product-images/garlic-bread-sticks-1.jpeg",
        image2: "images/product-images/garlic-bread-sticks-2.jpeg",
        image3: "images/product-images/garlic-bread-sticks-3.jpeg",
        name: 'Garlic Bread Sticks',
        price: 28,
        info: "Our Garlic Bread Sticks are soft, fluffy, and filled with buttery garlic goodness. Each stick is generously brushed with garlic butter and sprinkled with a blend of aromatic herbs, making it the perfect snack or side dish to complement any meal. Freshly baked to golden perfection, they’re a crowd favorite.",
        keywords: ['bread sticks', 'garlic', 'buttery', 'herbs', 'snack']
    },
    {
        id: '28yzb-x12k-nz5w',
        image: "images/product-images/cheese-tomato-pizza-slice.jpeg",
        image1: "images/product-images/cheese-tomato-pizza-slice-1.jpeg",
        image2: "images/product-images/cheese-tomato-pizza-slice-2.jpeg",
        image3: "images/product-images/cheese-tomato-pizza-slice-3.jpeg",
        name: 'Cheese and Tomato Pizza Slice',
        price: 32,
        info: "A slice of classic pizza with a perfectly crisp crust, topped with melted cheese and tangy tomato sauce. This pizza slice offers a simple, yet satisfying combination of flavors that are always a hit. Whether you're in the mood for a quick snack or a filling meal, it’s the ultimate comfort food.",
        keywords: ['pizza', 'cheese', 'tomato', 'classic', 'slice', 'snack']
    },
    {
        id: '29cde-y45m-lp6n',
        image: "images/product-images/mini-pancakes.jpeg",
        image1: "images/product-images/mini-pancakes-1.jpeg",
        image2: "images/product-images/mini-pancakes-2.jpeg",
        image3: "images/product-images/mini-pancakes-3.jpeg",
        name: 'Mini Pancakes with Syrup',
        price: 30,
        info: "Our fluffy mini pancakes are perfectly golden and topped with a generous drizzle of maple syrup. These mini treats are great for breakfast, dessert, or a sweet snack at any time of the day. Paired with a side of fresh fruit or whipped cream, they make for an indulgent, yet satisfying meal.",
        keywords: ['pancakes', 'syrup', 'sweet', 'breakfast', 'mini', 'treat']
    },
    {
        id: '30fgh-z78l-op2v',
        image: "images/product-images/chocolate-bites.jpeg",
        image1: "images/product-images/chocolate-bites-1.jpeg",
        image2: "images/product-images/chocolate-bites-2.jpeg",
        image3: "images/product-images/chocolate-bites-3.jpeg",
        name: 'Chocolate Brownie Bites',
        price: 35,
        type: 'featured',
        info: "Our Chocolate Brownie Bites are rich, fudgy, and bursting with real chocolate flavor. Each bite offers the perfect balance of sweetness and richness, making it the ultimate dessert for chocolate lovers. These decadent little treats are perfect for snacking or as an indulgent dessert to satisfy your sweet tooth.",
        keywords: ['brownie', 'chocolate', 'dessert', 'snack', 'sweet']
    },
    {
        id: '8ijk-l56m-xv2r',
        image: "images/product-images/sausage-rolls.jpeg",
        image1: "images/product-images/sausage-rolls-1.jpeg",
        image2: "images/product-images/sausage-rolls-2.jpeg",
        image3: "images/product-images/sausage-rolls-3.jpeg",
        name: 'Sausage Rolls',
        price: 30,
        info: "Our Sausage Rolls are made with flaky pastry and filled with seasoned sausage meat. They are perfect for sharing or as a tasty snack on the go. Baked to golden perfection, these rolls are a favorite at any gathering. The rich flavors of the sausage are complemented by a subtle blend of herbs and spices, making each bite savory and satisfying. Ideal for parties, picnics, or quick meals. Whether served warm or at room temperature, they never disappoint.",
        keywords: ['sausage', 'rolls', 'pastry', 'snack', 'sharing', 'baked']
    },
    {
        id: '4abc-r90t-qw8e',
        image: "images/product-images/breakfast-toastie.jpg",
        image1: "images/product-images/breakfast-toastie-1.jpg",
        image2: "images/product-images/breakfast-toastie-2.jpg",
        image3: "images/product-images/breakfast-toastie-3.jpg",
        name: 'Breakfast Toastie',
        price: 33,
        info: "Start your day right with our Breakfast Toastie. Packed with crispy bacon, melted cheese, and a fluffy egg, all grilled to perfection. This savory delight is sure to keep you energized through the morning. The golden-brown toast adds the perfect crunch, while the warm fillings create a satisfying flavor combination. Enjoy with a hot drink for a complete breakfast experience. It's quick, filling, and packed with all the breakfast essentials.",
        keywords: ['breakfast', 'toastie', 'bacon', 'cheese', 'egg', 'morning']
    }, {
        id: '6def-g54y-pz1q',
        image: "images/product-images/chip-roll-2.jpg",
        image1: "images/product-images/chip-roll-2-1.jpg",
        image2: "images/product-images/chip-roll-2-2.jpg",
        image3: "images/product-images/chip-roll-2-3.jpg",
        name: 'Chip Roll',
        price: 20,
        info: "Our Chip Roll is a unique twist on a classic. Soft bread filled with crispy chips, drizzled with vinegar or sauce of your choice. It's a comforting, hearty snack that’s sure to satisfy your cravings. The crunch of the chips complements the soft, chewy bread, creating a perfect contrast of textures. Ideal for lunch or an afternoon snack, this roll is customizable to your tastes with various condiments. Simple, filling, and deeply satisfying.",
        keywords: ['chip roll', 'chips', 'snack', 'hearty', 'bread', 'comfort']
    },
    {
        id: '7hij-n23l-bq5p',
        image: "images/product-images/chicken-mayo-toastie.jpg",
        image1: "images/product-images/chicken-mayo-toastie-1.jpg",
        image2: "images/product-images/chicken-mayo-toastie-2.jpg",
        image3: "images/product-images/chicken-mayo-toastie-3.jpg",
        name: 'Chicken Mayo Toastie',
        price: 33,
        info: "Savor the flavors of our Chicken Mayo Toastie, featuring tender chicken chunks mixed with creamy mayo, layered with fresh lettuce and tomatoes. Grilled until golden brown, this toastie is perfect for a quick lunch or a cozy dinner. The smooth mayo adds a rich texture to the lean chicken, while the fresh vegetables balance the flavors. It's the ideal meal for anyone craving comfort food with a light, refreshing touch. Perfectly toasted on the outside, warm and creamy inside.",
        keywords: ['chicken', 'toastie', 'mayo', 'grilled', 'lettuce', 'quick lunch']
    },
    {
        id: '3jkl-u78g-bn9b',
        image: "images/product-images/side-fries.jpg",
        image1: "images/product-images/side-fries-1.jpg",
        image2: "images/product-images/side-fries-2.jpg",
        image3: "images/product-images/side-fries-3.jpg",
        name: 'Side Fries',
        price: 29.99,
        type: 'featured',
        info: "Enjoy our classic fries, made with the perfect balance of crispy and fluffy textures. Ideal as a side to any main meal or as a standalone snack. Each fry is cut to the perfect thickness for an ideal crunch, and seasoned with a blend of spices to enhance their natural flavor. Whether paired with a burger or eaten on their own, they are a must-have for any meal. Served piping hot, these fries are a comforting treat anytime.",
        keywords: ['fries', 'side', 'crispy', 'snack', 'classic']
    },
    {
        id: '5hgf-ty67-dv9a',
        image: "images/product-images/burger.jpg",
        image1: "images/product-images/burger-1.jpg",
        image2: "images/product-images/burger-2.jpg",
        image3: "images/product-images/burger-3.jpg",
        name: 'Goodhope Burger',
        price: 54.99,
        info: "This burger is crafted with high-quality ingredients for maximum flavor. Whether you prefer it with cheese, bacon, or a veggie option, it's sure to satisfy your hunger. The beef patty is juicy and perfectly grilled, while the fresh lettuce, tomato, and pickles add a crisp, refreshing touch. Each burger is served on a soft, toasted bun, with a choice of savory condiments. It's the perfect balance of taste, texture, and indulgence.",
        keywords: ['burger', 'beef', 'cheese', 'bacon', 'veggie', 'high-quality']
    },
    {
        id: '8ijk-l56m-xv5d',
        image: "images/product-images/smash-burger.jpg",
        image1: "images/product-images/smash-burger-1.jpg",
        image2: "images/product-images/smash-burger-2.jpg",
        image3: "images/product-images/smash-burger-3.jpg",
        name: 'Smash Burger',
        price: 39.99,
        info: "A deliciously crafted burger featuring a perfectly grilled patty, crisp lettuce, and your choice of toppings. It's a classic meal that can be enjoyed any time of day. The patty is smashed to create a flavorful crust, ensuring a juicy and tender center. Paired with fresh vegetables and a soft bun, this burger offers a balanced and satisfying bite every time. A must-try for anyone who loves a hearty, flavorful meal.",
        keywords: ['burger', 'grilled', 'lettuce', 'classic', 'toppings', 'meal']
    },
    {
        id: '2gfd-e34d-ca7f',
        image: "images/product-images/energade-drink.jpg",
        image1: "images/product-images/energade-drink-1.jpg",
        image2: "images/product-images/energade-drink-2.jpg",
        image3: "images/product-images/energade-drink-3.jpg",
        name: 'Energade Drink',
        price: 16.99,
        info: "Quench your thirst with our Energade Drink, designed to rehydrate and refresh. Perfect for active individuals on the go. Packed with electrolytes, this drink helps replenish vital nutrients lost during exercise or a busy day. The invigorating citrus flavor is both refreshing and revitalizing. Whether you’re working out or just need a boost, Energade is the perfect companion to keep you feeling your best.",
        keywords: ['drink', 'energade', 'refresh', 'rehydrate', 'active', 'thirst']
    },
    {
        id: '1klm-d84v-yu7f',
        image: "images/product-images/milk-shakes.jpg",
        image1: "images/product-images/milk-shakes-1.jpg",
        image2: "images/product-images/milk-shakes-2.jpg",
        image3: "images/product-images/milk-shakes-3.jpg",
        name: 'Milk Shakes',
        price: 35,
        info: "Treat yourself to our rich and creamy Milk Shakes, available in a variety of delicious flavors. Made with real ice cream and topped with whipped cream, they’re the perfect way to cool off and indulge your sweet tooth. Each milkshake is blended to perfection, ensuring a smooth, velvety texture in every sip. From chocolate to vanilla, each flavor is rich and satisfying, ideal for dessert or as a special treat any time of day.",
        keywords: ['milkshake', 'sweet', 'creamy', 'ice cream', 'dessert', 'indulgent']
    },
    {
        id: '31ijk-x45m-op9z',
        image: "images/product-images/cheese-stuffed-jalapenos.jpeg",
        image1: "images/product-images/cheese-stuffed-jalapenos-1.jpeg",
        image2: "images/product-images/cheese-stuffed-jalapenos-2.jpeg",
        image3: "images/product-images/cheese-stuffed-jalapenos-3.jpeg",
        name: 'Cheese-Stuffed Jalapeños',
        price: 35,
        type: 'featured',
        info: "Spicy jalapeños stuffed with cream cheese, breaded, and fried to golden perfection. These little bites pack a punch, offering a delightful balance of heat and creamy texture. Perfect as an appetizer, party snack, or side dish, these stuffed jalapeños are guaranteed to impress. The crispy coating adds an extra crunch, enhancing the overall experience. Served with a cool dipping sauce, they’re a great way to kick off any meal.",
        keywords: ['jalapeños', 'cheese', 'spicy', 'snack', 'fried']
    },
    {
        id: '32lmn-y78k-nz6v',
        image: "images/product-images/spinach-and-feta-pie.jpeg",
        image1: "images/product-images/spinach-and-feta-pie-1.jpeg",
        image2: "images/product-images/spinach-and-feta-pie-2.jpeg",
        image3: "images/product-images/spinach-and-feta-pie-3.jpeg",
        name: 'Spinach and Feta Pie',
        price: 40,
        info: "A flaky pastry filled with a savory mix of spinach and feta cheese, baked to perfection. The creamy feta pairs perfectly with the tender spinach, creating a rich and flavorful filling. Encased in a buttery, golden pastry crust, this pie is a deliciously satisfying vegetarian option. Ideal as a light meal, snack, or side dish, it's perfect for those looking for a balance of fresh ingredients and indulgent flavor.",
        keywords: ['spinach', 'feta', 'pie', 'savory', 'pastry']
    },
    {
        id: '33opq-z34n-lp3w',
        image: "images/product-images/bbq-pulled-chicken-sandwich.jpeg",
        image1: "images/product-images/bbq-pulled-chicken-sandwich-1.jpeg",
        image2: "images/product-images/bbq-pulled-chicken-sandwich-2.jpeg",
        image3: "images/product-images/bbq-pulled-chicken-sandwich-3.jpeg",
        name: 'BBQ Pulled Chicken Sandwich',
        price: 50,
        info: "Tender pulled chicken smothered in BBQ sauce, served on a toasted bun with coleslaw. The smoky, tangy BBQ sauce complements the savory chicken, while the cool, crunchy coleslaw adds a refreshing contrast. This sandwich is a perfect meal for BBQ lovers, offering both comfort and flavor in every bite. Ideal for lunch or dinner, it's satisfying and deliciously messy, just the way a pulled chicken sandwich should be.",
        keywords: ['chicken', 'bbq', 'sandwich', 'coleslaw', 'savory']
    },
    {
        id: '34rst-x89l-mp2q',
        image: "images/product-images/coconut-shrimp.jpeg",
        image1: "images/product-images/coconut-shrimp-1.jpeg",
        image2: "images/product-images/coconut-shrimp-2.jpeg",
        image3: "images/product-images/coconut-shrimp-3.jpeg",
        name: 'Coconut Shrimp',
        price: 55,
        info: "Our Coconut Shrimp is a delightful appetizer, featuring shrimp coated in crispy coconut flakes, creating a perfect crunch with every bite. Paired with a tangy dipping sauce, it offers a balanced mix of sweet, savory, and a touch of heat. Ideal for parties or as a snack. Made from premium shrimp, these are a must-try for seafood lovers. Enjoy them hot or cold for the same satisfying experience. A great way to start any meal with an exotic twist.",
        keywords: ['shrimp', 'coconut', 'seafood', 'crispy', 'appetizer']
    },
    {
        id: '35uvw-y12k-lz4j',
        image: "images/product-images/avocado-toast.jpeg",
        image1: "images/product-images/avocado-toast-1.jpeg",
        image2: "images/product-images/avocado-toast-2.jpeg",
        image3: "images/product-images/avocado-toast-3.jpeg",
        name: 'Avocado Toast',
        price: 30,
        info: "Enjoy the perfect combination of creamy avocado spread on toasted whole-grain bread, topped with fresh cherry tomatoes and a light sprinkle of herbs. This healthy breakfast option is rich in nutrients and antioxidants, offering a boost of energy for the day ahead. It’s vegan-friendly and perfect for anyone looking for a nutritious meal. A delicious balance of creamy, crunchy, and fresh flavors, this toast is a popular choice for health-conscious individuals.",
        keywords: ['avocado', 'toast', 'healthy', 'breakfast', 'whole-grain']
    },
    {
        id: '36xyz-z45n-op6v',
        image: "images/product-images/fruit-parfait.jpeg",
        image1: "images/product-images/fruit-parfait-1.jpeg",
        image2: "images/product-images/fruit-parfait-2.jpeg",
        image3: "images/product-images/fruit-parfait-3.jpeg",
        name: 'Fruit Parfait',
        price: 35,
        type: 'featured',
        info: "A delightful treat that layers fresh, seasonal fruit with creamy yogurt and crunchy granola. This fruit parfait is not only delicious but also packed with vitamins and fiber. It’s the ideal option for a healthy breakfast, snack, or dessert. The combination of textures and flavors makes every spoonful satisfying and indulgent. Topped with a drizzle of honey or your favorite nut butter, it’s a refreshing choice that balances sweetness and nourishment.",
        keywords: ['fruit', 'parfait', 'yogurt', 'granola', 'healthy']
    },
    {
        id: '37abc-x34k-np8w',
        image: "images/product-images/pepperoni-pizza-slice.jpeg",
        image1: "images/product-images/pepperoni-pizza-slice-1.jpeg",
        image2: "images/product-images/pepperoni-pizza-slice-2.jpeg",
        image3: "images/product-images/pepperoni-pizza-slice-3.jpeg",
        name: 'Pepperoni Pizza Slice',
        price: 35,
        info: "This classic pepperoni pizza slice is a fan favorite, topped with crispy pepperoni, gooey melted cheese, and a tangy tomato sauce on a perfectly crisp crust. Whether you’re enjoying a quick lunch or a casual dinner, it’s the ultimate comfort food. The savory combination of flavors makes each bite irresistible. A slice of this pizza is guaranteed to satisfy your cravings for something warm and hearty. Enjoy with a cold drink for the perfect meal.",
        keywords: ['pizza', 'pepperoni', 'slice', 'cheese', 'savory']
    },
    {
        id: '38def-y89l-mz9q',
        image: "images/product-images/fried-rice-bowl.jpeg",
        image1: "images/product-images/fried-rice-bowl-1.jpeg",
        image2: "images/product-images/fried-rice-bowl-2.jpeg",
        image3: "images/product-images/fried-rice-bowl-3.jpeg",
        name: 'Fried Rice Bowl',
        price: 45,
        info: "Our Fried Rice Bowl is a savory blend of stir-fried rice with vegetables, soy sauce, and your choice of protein—either tender chicken or tofu. It’s a flavorful and satisfying meal that brings together rich umami flavors with a healthy twist. The fried rice is perfectly seasoned, making it a great choice for lunch or dinner. A hearty option that’s both filling and nutritious, perfect for those who love a savory Asian-inspired meal.",
        keywords: ['rice', 'fried', 'vegetables', 'soy sauce', 'bowl']
    },
    {
        id: '39ghi-z12n-op7v',
        image: "images/product-images/churros-with-dip.jpeg",
        image1: "images/product-images/churros-with-dip-1.jpeg",
        image2: "images/product-images/churros-with-dip-2.jpeg",
        image3: "images/product-images/churros-with-dip-3.jpeg",
        name: 'Churros with Dip',
        price: 30,
        info: "Golden churros, dusted with cinnamon sugar, are a sweet indulgence that will make your taste buds dance. Served with a side of chocolate or caramel dip, this dessert is the perfect balance of crispy, sweet, and rich. Whether you’re craving a treat after a meal or need something to satisfy your sweet tooth, these churros are sure to hit the spot. Enjoy them fresh and hot for the ultimate dessert experience.",
        keywords: ['churros', 'cinnamon', 'sugar', 'dip', 'dessert']
    },
    {
        id: '40jkl-x56m-nz5w',
        image: "images/product-images/chicken-caesar-salad.jpeg",
        image1: "images/product-images/chicken-caesar-salad-1.jpeg",
        image2: "images/product-images/chicken-caesar-salad-2.jpeg",
        image3: "images/product-images/chicken-caesar-salad-3.jpeg",
        name: 'Chicken Caesar Salad',
        price: 50,
        info: "This classic Chicken Caesar Salad is a crowd-pleaser with crisp romaine lettuce, juicy grilled chicken, crunchy croutons, and a generous sprinkle of parmesan cheese. Tossed in a creamy Caesar dressing, this salad is hearty enough to serve as a main meal yet light and refreshing. Perfect for a lunch or dinner that’s both satisfying and healthy, it’s a great way to enjoy a traditional favorite with a protein-packed twist.",
        keywords: ['salad', 'caesar', 'chicken', 'parmesan', 'healthy']
    },
    {
        id: '41mno-y12l-mp3q',
        image: "images/product-images/pancake-stack.jpeg",
        image1: "images/product-images/pancake-stack-1.jpeg",
        image2: "images/product-images/pancake-stack-2.jpeg",
        image3: "images/product-images/pancake-stack-3.jpeg",
        name: 'Pancake Stack',
        price: 40,
        info: "Start your day off right with a stack of fluffy pancakes served with warm syrup, melted butter, and fresh berries. This breakfast favorite is a comforting and indulgent choice that satisfies your cravings for something sweet and hearty. Each pancake is perfectly fluffy and golden, offering the ideal texture with every bite. Ideal for a lazy morning or a special weekend breakfast, it’s a delicious way to treat yourself.",
        keywords: ['pancakes', 'breakfast', 'stack', 'berries', 'syrup']
    }
    ,
    {
        id: '42pqr-z34k-lz7v',
        image: "images/product-images/teriyaki-chicken-skewers.jpeg",
        image1: "images/product-images/teriyaki-chicken-skewers-1.jpeg",
        image2: "images/product-images/teriyaki-chicken-skewers-2.jpeg",
        image3: "images/product-images/teriyaki-chicken-skewers-3.jpeg",
        name: 'Teriyaki Chicken Skewers',
        price: 55,
        info: "Our Teriyaki Chicken Skewers are grilled to perfection and glazed with a sweet, savory teriyaki sauce that enhances the flavor of the chicken. Served with a side of steamed rice, they make for a complete and satisfying meal. The skewers are tender and juicy, offering the perfect balance of grilled smokiness and teriyaki sweetness. A great choice for those who love flavorful, protein-packed dishes that are both filling and delicious.",
        keywords: ['chicken', 'skewers', 'teriyaki', 'grilled', 'savory']
    },
    {
        id: '43stu-x78n-np2j',
        image: "images/product-images/mango-smoothie.jpeg",
        image1: "images/product-images/mango-smoothie-1.jpeg",
        image2: "images/product-images/mango-smoothie-2.jpeg",
        image3: "images/product-images/mango-smoothie-3.jpeg",
        name: 'Mango Smoothie',
        price: 30,
        type: 'featured',
        info: "A refreshing and tropical treat, our Mango Smoothie is made with ripe mangoes, creamy yogurt, and a touch of honey for added sweetness. This smoothie is not only delicious but also packed with vitamins and minerals, making it a great choice for hydration and energy. Perfect for a mid-day snack or as a refreshing breakfast, it’s the ideal drink for anyone craving a tropical escape. A healthy, cool beverage that’s both satisfying and refreshing.",
        keywords: ['smoothie', 'mango', 'yogurt', 'drink', 'refreshing']
    },
    {
        id: '44vwx-y34l-op6w',
        image: "images/product-images/margherita-pizza-slice.jpeg",
        image1: "images/product-images/margherita-pizza-slice-1.jpeg",
        image2: "images/product-images/margherita-pizza-slice-2.jpeg",
        image3: "images/product-images/margherita-pizza-slice-3.jpeg",
        name: 'Margherita Pizza Slice',
        price: 30,
        type: 'featured',
        info: "A slice of classic Margherita pizza with fresh mozzarella, fragrant basil, and a tangy tomato sauce. This simple yet delicious pizza is perfect for those who enjoy the pure, authentic flavors of Italy. With its soft crust and balanced toppings, it’s a refreshing twist on a beloved favorite. Whether you’re grabbing a quick lunch or treating yourself to a savory meal, this pizza slice offers a taste of Italy in every bite.",
        keywords: ['pizza', 'margherita', 'cheese', 'basil', 'slice']
    },
    {
        id: '45yzb-z56m-np9v',
        image: "images/product-images/ice-cream-sundae.jpeg",
        image1: "images/product-images/ice-cream-sundae-1.jpeg",
        image2: "images/product-images/ice-cream-sundae-2.jpeg",
        image3: "images/product-images/ice-cream-sundae-3.jpeg",
        name: 'Ice Cream Sundae',
        price: 35,
        info: "Indulge in a rich and decadent ice cream sundae, featuring scoops of creamy vanilla ice cream drizzled with rich chocolate syrup, topped with whipped cream, and crowned with a cherry. A perfect dessert to satisfy your sweet tooth, this sundae is an irresistible treat that’s both creamy and crunchy. Ideal for a special occasion or a casual dessert, it’s the ultimate indulgence for any ice cream lover.",
        keywords: ['ice cream', 'sundae', 'dessert', 'sweet', 'chocolate']
    },
    {
        id: '0xyz-v12j-ki8s',
        image: "images/product-images/switch.jpg",
        image1: "images/product-images/switch-1.jpg",
        image2: "images/product-images/switch-2.jpg",
        image3: "images/product-images/switch-3.jpg",
        name: 'Switch Energy Drink',
        price: 10.99,
        info: "Stay energized and alert with our Switch Energy Drink, a perfect companion for those busy days when you need that extra boost. Formulated to enhance your stamina, it helps you power through your tasks with ease. Refreshing and invigorating, it’s ideal for a quick pick-me-up during work, study sessions, or any busy activity. Packed with natural ingredients, this energy drink provides a clean and steady release of energy, without the jitters or crashes. Whether you're an athlete or just need to stay on top of your game, Switch is the ideal drink to keep you going.",
        keywords: ['energy drink', 'refreshing', 'stamina', 'alert', 'boost']
    },
    {
        id: '9abc-l56d-hg3f',
        image: "images/product-images/score-drink.jpg",
        image1: "images/product-images/score-drink-1.jpg",
        image2: "images/product-images/score-drink-2.jpg",
        image3: "images/product-images/score-drink-3.jpg",
        name: 'Score Energy',
        price: 10.99,
        info: "Score Energy is designed to fuel your body and mind with the essential vitamins and minerals you need to perform at your best. Packed with a unique blend of ingredients, it provides a quick and sustained energy boost, helping you stay sharp and focused. Whether you’re training for a sport, powering through a busy day, or preparing for a big event, Score Energy is the perfect drink to help you perform at your peak. With a refreshing flavor and a smooth finish, it’s a favorite choice for athletes and anyone who needs an extra edge.",
        keywords: ['score', 'energy', 'boost', 'vitamins', 'performance', 'athletes']
    },
    {
        id: '4ghi-p29j-wq7z',
        image: "images/product-images/double-o.jpg",
        image1: "images/product-images/double-o-1.jpg",
        image2: "images/product-images/double-o-2.jpg",
        image3: "images/product-images/double-o-3.jpg",
        name: 'Double "O"',
        price: 14.99,
        info: "Double 'O' is the energy drink for those who want more—more flavor, more energy, and more kick. With a bold, intense taste, this drink is formulated to provide a powerful and sustained energy boost. Whether you're gearing up for an intense workout, a long day of work, or a night out, Double 'O' has you covered. It's the perfect balance of energy and refreshment, helping you stay focused and energized. Infused with natural ingredients, it delivers that extra edge without the crash that other energy drinks might cause.",
        keywords: ['energy drink', 'bold', 'refreshing', 'workout', 'long days']
    }
     
];
