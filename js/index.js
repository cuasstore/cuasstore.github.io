// 模拟商品数据 (实际应用中应从外部JSON文件加载)
const products = {
    hot: [
        {
            id: 1,
            title: "变色龙Ultra",
            price: 179.00,
            originalPrice: 199.00,
            sales: "已售0",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com/"
        },
        {
            id: 2,
            title: "自动轮询激活码👍",
            price: 30.00,
            originalPrice: 399.9,
            sales: "已售300+",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        },
        {
            id: 3,
            title: "变色龙16灯重启版",
            price: 299.00,
            originalPrice: 1999999999.00,
            sales: "已售不知道",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        },
        {
            id: 4,
            title: "变色龙Ultra保护壳",
            price: 129.00,
            originalPrice: 199.00,
            sales: "已售5千",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        }
    ],
    new: [
        {
            id: 5,
            title: "变色龙16灯重启版👍👍👍",
            price: 299.00,
            originalPrice: 399.00,
            sales: "新品上市",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        },
        {
            id: 6,
            title: "变色龙滴胶坏",
            price: 159.00,
            originalPrice: 259.00,
            sales: "新品上市",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        },
        {
            id: 7,
            title: "变色龙半成品",
            price: 899.00,
            originalPrice: 1299.00,
            sales: "新品上市",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        },
        {
            id: 8,
            title: "变色龙",
            price: 399.00,
            originalPrice: 599.00,
            sales: "新品上市",
            image: "images/cu-PL-LF.png",
            taobaoLink: "https://taobao.com"
        }
    ]
};

// 渲染商品卡片
function renderProducts() {
    const hotProductsContainer = document.getElementById('hot-products');
    const newProductsContainer = document.getElementById('new-products');

    // 渲染热销商品
    products.hot.forEach(product => {
        hotProductsContainer.appendChild(createProductCard(product));
    });

    // 渲染新品
    products.new.forEach(product => {
        newProductsContainer.appendChild(createProductCard(product));
    });

    // 为购买按钮添加事件监听
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const product = [...products.hot, ...products.new].find(p => p.id == productId);
            if (product) {
                window.open(product.taobaoLink, '_blank');
            }
        });
    });
}

// 创建商品卡片DOM元素
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        ¥${product.price.toFixed(2)}
                        <span class="product-original-price">¥${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <div class="product-sales">${product.sales}</div>
                    <div class="product-actions">
                        <button class="detail-btn">查看详情</button>
                        <button class="buy-btn" data-id="${product.id}">立即购买</button>
                    </div>
                </div>
            `;

    return card;
}

// 页面加载完成后渲染商品
document.addEventListener('DOMContentLoaded', renderProducts);

// 实际应用中应该从外部JSON文件加载数据
/*
fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts();
    })
    .catch(error => console.error('Error loading products:', error));
*/