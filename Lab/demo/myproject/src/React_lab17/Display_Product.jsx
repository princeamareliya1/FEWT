import React from 'react'

function Display_Product() {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
            name: "Laptop",
            price: 55000,
            brand: "Dell",
            category: "Laptop",
            storage: "512GB SSD",
            ram: "16GB",
            processor: "Intel Core i5",
            instock: "Yes",
            description: "Powerful and lightweight laptop for work and study",
        },

        {
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            name: "Smartphone",
            price: 25000,
            brand: "Samsung",
            category: "Mobile",
            storage: "128GB",
            ram: "8GB",
            display: "6.5 inch",
            instock: "Yes",
            description: "Modern smartphone with a high-resolution display",
        },

        {
            image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
            name: "Headphones",
            price: 3000,
            brand: "Sony",
            category: "Audio",
            connectivity: "Bluetooth",
            battery: "30 Hours",
            type: "Wireless",
            instock: "No",
            description: "Wireless headphones with clear sound quality",
        },

        {
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
            name: "Tablet",
            price: 18000,
            brand: "Lenovo",
            category: "Tablet",
            storage: "128GB",
            ram: "6GB",
            display: "10.1 inch",
            instock: "Yes",
            description: "Portable tablet with a large touchscreen display",
        },
    ];
    return (
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
            {products.map((products, index) => (
                <div class="card" style={{width: "18rem",border:"2px solid red"}} key={index}>
                    <img src={products.image} style={{height:"500px",width:"500px"}} class="card-img-top" alt={products.name}/>
                        <div class="card-body">
                            <h5 class="card-title">{products.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Display_Product
