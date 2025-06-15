// 从外部JSON文件加载商品数据
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading products:', error);
        return { hot: [], new: [] }; // 返回空数据以防出错
    }
}

// 渲染商品卡片
async function renderProducts() {
    const products = await loadProducts();

    const hotProductsContainer = document.getElementById('hot-products');
    const newProductsContainer = document.getElementById('new-products');

    // 清空容器
    hotProductsContainer.innerHTML = '';
    newProductsContainer.innerHTML = '';

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
