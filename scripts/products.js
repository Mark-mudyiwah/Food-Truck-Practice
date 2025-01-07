


export function getProduct(productId){
    let matchingProduct;

    products.forEach((product)=>{
        if(product.id === productId){
          matchingProduct = product
        
        }
      
       })
       
    return matchingProduct
};



export const products = [
    
        {
            id: '11abc-x23y-tz5u',
            image: "images/product-images/vegan-burger.jpeg",
            name: 'Vegan Burger',
            price: 40,
            info: "A plant-based burger patty topped with fresh lettuce, tomato, and vegan mayo. Served on a whole-grain bun for a healthier choice.",
            keywords: ['vegan', 'burger', 'plant-based', 'healthy', 'lettuce', 'whole-grain']
        },
        {
            id: '12def-v45j-nz7q',
            image: "images/product-images/fish-tacos.jpeg",
            name: 'Fish Tacos',
            price: 55,
            info: "Crispy battered fish fillets with fresh salsa, shredded cabbage, and tangy chipotle sauce, all wrapped in a soft tortilla.",
            keywords: ['fish', 'tacos', 'crispy', 'salsa', 'chipotle', 'seafood']
        },
        {
            id: '13ghi-z12x-bw4p',
            image: "images/product-images/grilled-cheese-sandwich.jpeg",
            name: 'Grilled Cheese Sandwich',
            price: 30,
            info: "A classic sandwich with melted cheddar and mozzarella cheese, grilled to perfection on buttery bread.",
            keywords: ['grilled cheese', 'sandwich', 'cheddar', 'mozzarella', 'buttery']
        },
        {
            id: '14jkl-q89m-cz3v',
            image: "images/product-images/loaded-nanchos.jpeg",
            name: 'Loaded Nachos',
            price: 45,
            info: "Crispy tortilla chips topped with melted cheese, jalapeños, salsa, guacamole, and sour cream.",
            keywords: ['nachos', 'tortilla', 'cheese', 'salsa', 'snack', 'chips']
        },
        {
            id: '15mno-y34t-dx9w',
            image: "images/product-images/mediterranean-salad.jpeg",
            name: 'Mediterranean Salad',
            price: 35,
            info: "A fresh and healthy salad with mixed greens, cherry tomatoes, cucumber, red onion, feta cheese, and olives, drizzled with a tangy vinaigrette.",
            keywords: ['salad', 'mediterranean', 'healthy', 'greens', 'feta', 'vinaigrette']
        },
        {
            id: '16pqr-u89k-lz6v',
            image: "images/product-images/buffalo-chicken-wrap.jpeg",
            name: 'Buffalo Chicken Wrap',
            price: 40,
            info: "Tender buffalo chicken strips with lettuce, tomatoes, and ranch dressing, all wrapped in a soft tortilla.",
            keywords: ['chicken', 'buffalo', 'wrap', 'ranch', 'spicy', 'snack']
        },
        {
            id: '17stu-v12y-xm4z',
            image: "images/product-images/fallafel-wrap.jpeg",
            name: 'Falafel Wrap',
            price: 38,
            info: "Crispy falafel balls, fresh vegetables, and tahini sauce wrapped in a warm tortilla for a delicious vegan option.",
            keywords: ['falafel', 'vegan', 'wrap', 'tahini', 'vegetables']
        },
        {
            id: '18vwx-w45m-np2j',
            image: "images/product-images/vegetarian-quesadilla.jpeg",
            name: 'Vegetarian Quesadilla',
            price: 35,
            info: "Grilled quesadilla stuffed with cheese, sautéed vegetables, and a side of salsa for dipping.",
            keywords: ['quesadilla', 'vegetarian', 'cheese', 'sautéed', 'salsa', 'grilled']
        },
        {
            id: '19yza-x78n-lp9q',
            image: "images/product-images/spicy-chicken-wings.jpeg",
            name: 'Spicy Chicken Wings',
            price: 50,
            info: "Juicy chicken wings tossed in a spicy sauce, served with a side of cooling ranch dressing.",
            keywords: ['chicken', 'wings', 'spicy', 'sauce', 'ranch']
        },
        {
            id: '20bcd-y45l-mz8n',
            image: "images/product-images/caesar-salad-wrap.jpeg",
            name: 'Caesar Salad Wrap',
            price: 40,
            info: "Crisp romaine lettuce, parmesan cheese, and grilled chicken tossed in Caesar dressing, wrapped in a soft tortilla.",
            keywords: ['wrap', 'caesar', 'chicken', 'parmesan', 'lettuce', 'salad']
        },
        {
            id: '21efg-z12y-xn9v',
            image: "images/product-images/sweet-potato-fries.jpeg",
            name: 'Sweet Potato Fries',
            price: 30,
            info: "Crispy, golden sweet potato fries seasoned with a hint of paprika, perfect as a side or snack.",
            keywords: ['fries', 'sweet potato', 'crispy', 'snack', 'side']
        },

        
    {
        id: '2gfd-e34d-ca3e',
        image: "images/product-images/gourmet-burger.jpg",
        name: 'Gourmet Burger',
        price: 50,
        info: "Indulge in our Gourmet Burger, crafted with a premium beef patty, fresh lettuce, ripe tomatoes, and artisanal cheese. Topped with our special sauce and served on a toasted brioche bun, it's a taste experience you won't forget. Perfect for those looking for a decadent meal.",
        keywords: ['beef', 'burger', 'gourmet', 'premium', 'brioche', 'special sauce']
    },
    {
        id: '5hgf-ty67-dv4c',
        image: "images/product-images/Everyday-burger.jpg",
        name: 'Everyday Burger',
        price: 45,
        info: "The Everyday Burger is a classic staple that never goes out of style. Made with a juicy beef patty, crisp pickles, and onions, this burger strikes the perfect balance of flavors. Whether it's lunch or dinner, this burger is a satisfying choice for any occasion.",
        keywords: ['beef', 'burger', 'classic', 'pickles', 'onions', 'lunch', 'dinner']
    },
    {
        id: '3jkl-u78g-bn9a',
        image: "images/product-images/chicken-burger.jpg",
        name: 'Chicken Burger',
        price: 45,
        info: "Our Chicken Burger features a marinated, grilled chicken breast, complemented by fresh greens and tangy mayo. This lighter option is full of flavor and texture, making it a great choice for health-conscious diners. Perfectly paired with a side of fries or a salad.",
        keywords: ['chicken', 'burger', 'grilled', 'health-conscious', 'mayo', 'salad']
    },
    {
        id: '9mno-p45h-qe3b',
        image: "images/product-images/hot-dog.jpg",
        name: 'Hot Dog',
        price: 59,
        info: "Enjoy a classic Hot Dog, featuring a juicy sausage nestled in a soft bun. Topped with mustard, ketchup, and your choice of relish, it's the ultimate comfort food. Ideal for a quick lunch or a fun snack during a game day!",
        keywords: ['sausage', 'hot dog', 'classic', 'mustard', 'ketchup', 'snack']
    },
        {
            id: '22hij-x34m-lz7q',
            image: "images/product-images/chilli-cheese-fries.jpeg",
            name: 'Chili Cheese Fries',
            price: 40,
            info: "Crispy fries topped with hearty chili and melted cheese, perfect for sharing or as a main dish.",
            keywords: ['fries', 'chili', 'cheese', 'hearty', 'snack', 'shareable']
        },
        {
            id: '23klm-y56n-op8v',
            image: "images/product-images/lemon-iced-tea.jpeg",
            name: 'Lemon Iced Tea',
            price: 20,
            info: "A refreshing and tangy iced tea made with real lemons and lightly sweetened.",
            keywords: ['iced tea', 'lemon', 'refreshing', 'drink', 'tangy']
        },
        {
            id: '24nop-z78k-lp3j',
            image: "images/product-images/berry-smoothie.jpeg",
            name: 'Berry Smoothie',
            price: 35,
            info: "A creamy smoothie blended with a mix of fresh berries, yogurt, and a touch of honey.",
            keywords: ['smoothie', 'berry', 'yogurt', 'drink', 'creamy']
        },
        {
            id: '25qrs-w34m-xz6n',
            image: "images/product-images/tropical-fruit-juice.jpeg",
            name: 'Tropical Fruit Juice',
            price: 25,
            info: "A vibrant blend of tropical fruits like mango, pineapple, and orange, perfect for a refreshing drink.",
            keywords: ['juice', 'tropical', 'mango', 'pineapple', 'refreshing', 'drink']
        },
        {
            id: '26tuv-y45l-np8v',
            image: "images/product-images/mint-lemmonade.jpeg",
            name: 'Mint Lemonade',
            price: 18,
            info: "A zesty lemonade infused with fresh mint leaves for a cool and invigorating taste.",
            keywords: ['lemonade', 'mint', 'refreshing', 'drink', 'zesty']
        },
        {
            id: '27wxy-z67m-op3q',
            image: "images/product-images/garlic-bread-sticks.jpeg",
            name: 'Garlic Bread Sticks',
            price: 28,
            info: "Soft and fluffy bread sticks brushed with garlic butter and sprinkled with herbs.",
            keywords: ['bread sticks', 'garlic', 'buttery', 'herbs', 'snack']
        },
        {
            id: '28yzb-x12k-nz5w',
            image: "images/product-images/cheese-tomato-pizza-slice.jpeg",
            name: 'Cheese and Tomato Pizza Slice',
            price: 32,
            info: "A slice of classic pizza with melted cheese and tangy tomato sauce, baked to perfection.",
            keywords: ['pizza', 'cheese', 'tomato', 'classic', 'slice', 'snack']
        },
        {
            id: '29cde-y45m-lp6n',
            image: "images/product-images/mini-pancakes.jpeg",
            name: 'Mini Pancakes with Syrup',
            price: 30,
            info: "Fluffy mini pancakes drizzled with maple syrup, perfect for a sweet treat or breakfast.",
            keywords: ['pancakes', 'syrup', 'sweet', 'breakfast', 'mini', 'treat']
        },
        {
            id: '30fgh-z78l-op2v',
            image: "images/product-images/chocolate-bites.jpeg",
            name: 'Chocolate Brownie Bites',
            price: 35,
            info: "Rich and fudgy brownie bites made with real chocolate, perfect for dessert or snacking.",
            keywords: ['brownie', 'chocolate', 'dessert', 'snack', 'sweet']
        },
    
    {
        id: '8ijk-l56m-xv2r',
        image: "images/product-images/sausage-rolls.jpeg",
        name: 'Sausage Rolls',
        price: 30,
        info: "Our Sausage Rolls are made with flaky pastry and filled with seasoned sausage meat. They are perfect for sharing or as a tasty snack on the go. Baked to golden perfection, these rolls are a favorite at any gathering.",
        keywords: ['sausage', 'rolls', 'pastry', 'snack', 'sharing', 'baked']
    },
    {
        id: '4abc-r90t-qw8e',
        image: "images/product-images/breakfast-toastie.jpg",
        name: 'Breakfast Toastie',
        price: 33,
        info: "Start your day right with our Breakfast Toastie. Packed with crispy bacon, melted cheese, and a fluffy egg, all grilled to perfection. This savory delight is sure to keep you energized through the morning.",
        keywords: ['breakfast', 'toastie', 'bacon', 'cheese', 'egg', 'morning']
    },
    {
        id: '6def-g54y-pz1q',
        image: "images/product-images/chip-roll-2.jpg",
        name: 'Chip Roll',
        price: 20,
        info: "Our Chip Roll is a unique twist on a classic. Soft bread filled with crispy chips, drizzled with vinegar or sauce of your choice. It's a comforting, hearty snack that’s sure to satisfy your cravings.",
        keywords: ['chip roll', 'chips', 'snack', 'hearty', 'bread', 'comfort']
    },
    {
        id: '7hij-n23l-bq5p',
        image: "images/product-images/chicken-mayo-toastie.jpg",
        name: 'Chicken Mayo Toastie',
        price: 33,
        info: "Savor the flavors of our Chicken Mayo Toastie, featuring tender chicken chunks mixed with creamy mayo, layered with fresh lettuce and tomatoes. Grilled until golden brown, this toastie is perfect for a quick lunch or a cozy dinner.",
        keywords: ['chicken', 'toastie', 'mayo', 'grilled', 'lettuce', 'quick lunch']
    },
    {
        id: '3jkl-u78g-bn9b',
        image: "images/product-images/side-fries.jpg",
        name: 'Side Fries',
        price: 29.99,
        info: "Enjoy our classic fries, made with the perfect balance of crispy and fluffy textures. Ideal as a side to any main meal or as a standalone snack.",
        keywords: ['fries', 'side', 'crispy', 'snack', 'classic']
    },
    {
        id: '5hgf-ty67-dv9a',
        image: "images/product-images/burger.jpg",
        name: 'Goodhope Burger',
        price: 54.99,
        info: "This burger is crafted with high-quality ingredients for maximum flavor. Whether you prefer it with cheese, bacon, or a veggie option, it's sure to satisfy your hunger.",
        keywords: ['burger', 'beef', 'cheese', 'bacon', 'veggie', 'high-quality']
    },
    {
        id: '8ijk-l56m-xv5d',
        image: "images/product-images/smash-burger.jpg",
        name: 'Smash Burger',
        price: 39.99,
        info: "A deliciously crafted burger featuring a perfectly grilled patty, crisp lettuce, and your choice of toppings. It's a classic meal that can be enjoyed any time of day.",
        keywords: ['burger', 'grilled', 'lettuce', 'classic', 'toppings', 'meal']
    },
    {
        id: '2gfd-e34d-ca7f',
        image: "images/product-images/energade-drink.jpg",
        name: 'Energade Drink',
        price: 16.99,
        info: "Quench your thirst with our Energade Drink, designed to rehydrate and refresh. Perfect for active individuals on the go.",
        keywords: ['drink', 'energade', 'refresh', 'rehydrate', 'active', 'thirst']
    },
    {
        id: '1klm-d84v-yu7f',
        image: "images/product-images/milk-shakes.jpg",
        name: 'Milk Shakes',
        price: 35,
        info: "Treat yourself to our rich and creamy Milk Shakes, available in a variety of delicious flavors. Made with real ice cream and topped with whipped cream, they’re the perfect way to cool off and indulge your sweet tooth.",
        keywords: ['milkshake', 'sweet', 'creamy', 'ice cream', 'dessert', 'indulgent']
    },
        {
            id: '31ijk-x45m-op9z',
            image: "images/product-images/cheese-stuffed-jalapenos.jpeg",
            name: 'Cheese-Stuffed Jalapeños',
            price: 35,
            info: "Spicy jalapeños stuffed with cream cheese, breaded, and fried to golden perfection.",
            keywords: ['jalapeños', 'cheese', 'spicy', 'snack', 'fried']
        },
        {
            id: '32lmn-y78k-nz6v',
            image: "images/product-images/spinach-and-feta-pie.jpeg",
            name: 'Spinach and Feta Pie',
            price: 40,
            info: "A flaky pastry filled with a savory mix of spinach and feta cheese, baked to perfection.",
            keywords: ['spinach', 'feta', 'pie', 'savory', 'pastry']
        },
        {
            id: '33opq-z34n-lp3w',
            image: "images/product-images/bbq-pulled-chicken-sandwich.jpeg",
            name: 'BBQ Pulled Chicken Sandwich',
            price: 50,
            info: "Tender pulled chicken smothered in BBQ sauce, served on a toasted bun with coleslaw.",
            keywords: ['chicken', 'bbq', 'sandwich', 'coleslaw', 'savory']
        },
        {
            id: '34rst-x89l-mp2q',
            image: "images/product-images/coconut-shrimp.jpeg",
            name: 'Coconut Shrimp',
            price: 55,
            info: "Crispy shrimp coated in coconut flakes, served with a tangy dipping sauce.",
            keywords: ['shrimp', 'coconut', 'seafood', 'crispy', 'appetizer']
        },
        {
            id: '35uvw-y12k-lz4j',
            image: "images/product-images/avocado-toast.jpeg",
            name: 'Avocado Toast',
            price: 30,
            info: "Creamy avocado spread on toasted whole-grain bread, topped with cherry tomatoes and a sprinkle of herbs.",
            keywords: ['avocado', 'toast', 'healthy', 'breakfast', 'whole-grain']
        },
        {
            id: '36xyz-z45n-op6v',
            image: "images/product-images/fruit-parfait.jpeg",
            name: 'Fruit Parfait',
            price: 35,
            info: "Layers of fresh fruit, creamy yogurt, and granola for a deliciously healthy treat.",
            keywords: ['fruit', 'parfait', 'yogurt', 'granola', 'healthy']
        },
        {
            id: '37abc-x34k-np8w',
            image: "images/product-images/pepperoni-pizza-slice.jpeg",
            name: 'Pepperoni Pizza Slice',
            price: 35,
            info: "A classic pizza slice topped with pepperoni, melted cheese, and tangy tomato sauce.",
            keywords: ['pizza', 'pepperoni', 'slice', 'cheese', 'savory']
        },
        {
            id: '38def-y89l-mz9q',
            image: "images/product-images/fried-rice-bowl.jpeg",
            name: 'Fried Rice Bowl',
            price: 45,
            info: "A flavorful bowl of fried rice with vegetables, soy sauce, and your choice of chicken or tofu.",
            keywords: ['rice', 'fried', 'vegetables', 'soy sauce', 'bowl']
        },
        {
            id: '39ghi-z12n-op7v',
            image: "images/product-images/churros-with-dip.jpeg",
            name: 'Churros with Dip',
            price: 30,
            info: "Golden churros dusted with cinnamon sugar, served with a side of chocolate or caramel dip.",
            keywords: ['churros', 'cinnamon', 'sugar', 'dip', 'dessert']
        },
        {
            id: '40jkl-x56m-nz5w',
            image: "images/product-images/chicken-caesar-salad.jpeg",
            name: 'Chicken Caesar Salad',
            price: 50,
            info: "Crisp romaine lettuce, grilled chicken, croutons, and parmesan tossed in Caesar dressing.",
            keywords: ['salad', 'caesar', 'chicken', 'parmesan', 'healthy']
        },
        {
            id: '41mno-y12l-mp3q',
            image: "images/product-images/pancake-stack.jpeg",
            name: 'Pancake Stack',
            price: 40,
            info: "Fluffy pancakes stacked high and served with syrup, butter, and fresh berries.",
            keywords: ['pancakes', 'breakfast', 'stack', 'berries', 'syrup']
        },
        {
            id: '42pqr-z34k-lz7v',
            image: "images/product-images/teriyaki-chicken-skewers.jpeg",
            name: 'Teriyaki Chicken Skewers',
            price: 55,
            info: "Grilled chicken skewers glazed with a sweet and savory teriyaki sauce, served with rice.",
            keywords: ['chicken', 'skewers', 'teriyaki', 'grilled', 'savory']
        },
        {
            id: '43stu-x78n-np2j',
            image: "images/product-images/mango-smoothie.jpeg",
            name: 'Mango Smoothie',
            price: 30,
            info: "A refreshing smoothie made with ripe mangoes, yogurt, and a touch of honey.",
            keywords: ['smoothie', 'mango', 'yogurt', 'drink', 'refreshing']
        },
        {
            id: '44vwx-y34l-op6w',
            image: "images/product-images/margherita-pizza-slice.jpeg",
            name: 'Margherita Pizza Slice',
            price: 30,
            info: "A slice of classic Margherita pizza with fresh mozzarella, basil, and tomato sauce.",
            keywords: ['pizza', 'margherita', 'cheese', 'basil', 'slice']
        },
        {
            id: '45yzb-z56m-np9v',
            image: "images/product-images/ice-cream-sundae.jpeg",
            name: 'Ice Cream Sundae',
            price: 35,
            info: "A delightful sundae with scoops of vanilla ice cream, chocolate syrup, whipped cream, and a cherry on top.",
            keywords: ['ice cream', 'sundae', 'dessert', 'sweet', 'chocolate']
        },
    {
        id: '0xyz-v12j-ki8s',
        image: "images/product-images/switch.jpg",
        name: 'Switch Energy Drink',
        price: 10.99,
        info: "Stay energized with our Switch Energy Drink, designed to boost your stamina and keep you alert. Refreshing and invigorating, it's perfect for a quick pick-me-up anytime during your busy day.",
        keywords: ['energy drink', 'refreshing', 'stamina', 'alert', 'boost']
    },
    {
        id: '9abc-l56d-hg3f',
        image: "images/product-images/score-drink.jpg",
        name: 'Score Energy',
        price: 10.99,
        info: "Score Energy provides a powerful boost when you need it most. Packed with essential vitamins and a refreshing taste, this drink is perfect for athletes or anyone looking to enhance their performance.",
        keywords: ['score', 'energy', 'boost', 'vitamins', 'performance', 'athletes']
    },
    {
        id: '4ghi-p29j-wq7z',
        image: "images/product-images/double-o.jpg",
        name: 'Double "O"',
        price: 14.99,
        info: "Double 'O' is a unique energy drink with a bold flavor and double the kick. It's formulated to provide sustained energy and refreshment, making it the perfect companion for workouts or long days.",
        keywords: ['energy drink', 'bold', 'refreshing', 'workout', 'long days']
    },
    
];

