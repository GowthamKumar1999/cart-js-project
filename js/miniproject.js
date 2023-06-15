var products=[
    {
        id:0,
        image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70',
        title:'mobile1',
        price:100
    },
    {
        id:1,
        image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70',
        title:'mobile2',
        price:200
    },
    {
        id:2,
        image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70',
        title:'mobile3',
        price:300
    },
    {
        id:3,
        image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70',
        title:'mobile4',
        price:400
    },
    {
        id:4,
        image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/4/q/v/-original-imagz3curry7jhsy.jpeg?q=70',
        title:'mobile5',
        price:500
    },
];

var categories=[...new Set(products.map((item)=>
    {
        return item
    }))]
    
    var i=0;
    document.getElementById("root").innerHTML=categories.map((item)=>
    {
        var {image,title,price}=item;
        return(
            
            `<div class="box">
                <div class="img-box">
                   <img class="imgbox" src=${image}>
                </div>
                
                <div class="bottom">
                    <p>${title}</p>
                    <h2>${price}.00</h2>` +
                    "<button onclick='addtocart("+ (i++) +")';>Add to cart</button>" +
                `</div>
            </div>`
            )
    }
).join('');

var cart=[];
function addtocart(a)
{
    cart.push({...categories[a]});
    displaycart();
}

function removefromcart(a)
{
    cart.splice(a,1);
    displaycart();
}

function displaycart(a)
{
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0)
    {
        document.getElementById("cartitem").innerHTML="YOUR CART IS EMPTY PLEASE SHOP!!";
        document.getElementById("total").innerHTML="$" + 0 + ".00";
    }
    
    else
    {
        document.getElementById("cartitem").innerHTML=cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML= "$" + total + ".00";
            
            return(
                `<div class="cart-item">
                    <div class="row-img">
                    <img class="rowimg" src=${image}>
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>${price}.00 </h2>` +
                    "<button onclick='removefromcart("+(j++)+")';> Remove from cart</button>" +
                `</div>
                </div>`
            )
        }).join('');
    }
}