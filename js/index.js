// 模拟更新操作
const updateButton = document.querySelector('.update-button');
updateButton.addEventListener('click', function () {
    updateMainContent("更新进行中");
    startProgress();
});

// 模拟更新完成后的倒计时 
function updateOK() {
    updateMainContent("更新完成"); // 更新内容为“更新完成”页面
    var tkymdjs = 3;
    var interval = setInterval(function () {
        tkymdjs--;
        if (tkymdjs <= 0) {
            clearInterval(interval);
            updateMainContent("首页"); // 更新内容为“首页”页面
        }
    }, 1000);
}

// 模拟更新进度条
function startProgress() {
    var updateprogress = document.getElementById('updateprogress');
    var value = 0;
    var interval = setInterval(function () {
        value++;
        updateprogress.value = value;
        if (value >= 100) {
            clearInterval(interval);
            updateOK(); // 调用更新完成函数   
        }
    }, 10);
}

// 卡槽悬停效果
const slots = document.querySelectorAll('.slot');
slots.forEach(slot => {
    slot.addEventListener('click', function () {
        slots.forEach(s => s.style.boxShadow = '0 4px 10px rgba(0, 0, 20, 0.4)');
        this.style.boxShadow = '0 0 15px rgba(100, 180, 255, 0.7)';

        // 显示卡槽信息
        alert(`已选择卡槽 ${this.textContent}`);
    });
});

// 状态指示灯动画
const indicator = document.querySelector('.status-indicator');
setInterval(() => {
    indicator.style.opacity = indicator.style.opacity === '0.5' ? '1' : '0.5';
}, 800);

// 导航菜单激活状态
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // 更新页面标题
        const pageTitle = this.querySelector('span').textContent;
        document.querySelector('.home-link span').textContent = pageTitle;

        // 根据选中的菜单项更新内容
        updateMainContent(pageTitle);
    });
});


// 根据菜单项更新内容
function updateMainContent(page) {
    const content = document.querySelector('.device-status');
    const deviceName = document.querySelector('.device-name');

    // 更新设备名称显示
    deviceName.textContent = page;

    // 更新主要内容区域
    switch (page) {
        case '首页':
            content.innerHTML = `
                        <div class="status-item">
                            <span class="status-label">设备标识</span>
                            <div class="status-value">
                                D8:62:DE:56:B7:71
                                <span class="status-error">❌</span>
                            </div>
                        </div>
                        
                        <div class="device-name">${page}</div>
                        
                        <div class="slot-container">
                            <div class="slot-header">
                                <span>卡槽状态</span>
                                <span>已使用的卡槽: <span class="slot-count">3/16</span></span>
                            </div>
                            
                            <div class="slots">
                                <div class="slot">A</div>
                                <div class="slot">B</div>
                                <div class="slot">C</div>
                            </div>
                        </div>
                        
                        <div class="device-logo">Chameleon Ultra</div>
                        
                        <div class="firmware-info">
                            <span class="firmware-label">轮询固件版本:</span>
                            <span class="firmware-version">v3.0-29-qc955c4f</span>
                        </div>
                        
                        <button class="update-button">
                            在线安装最新版本轮询固件
                            <div class="arrows">↑ ↑ ↑</div>
                        </button>
                    `;
            break;

        case '卡槽管理':
            content.innerHTML = `
                        <div class="device-name">${page}</div>
                        
                        <div class="slot-container">
                            <div class="slot-header">
                                <span>卡槽状态</span>
                                <span>已使用的卡槽: <span class="slot-count">3/16</span></span>
                            </div>
                            
                            <div class="slots">
                                <div class="slot">A</div>
                                <div class="slot">B</div>
                                <div class="slot">C</div>
                                <div class="slot">D</div>
                                <div class="slot">E</div>
                                <div class="slot">F</div>
                            </div>
                            
                            <div class="slots" style="margin-top: 20px;">
                                <div class="slot">G</div>
                                <div class="slot">H</div>
                                <div class="slot">I</div>
                                <div class="slot">J</div>
                                <div class="slot">K</div>
                                <div class="slot">L</div>
                            </div>
                            
                            <div class="slots" style="margin-top: 20px;">
                                <div class="slot">M</div>
                                <div class="slot">N</div>
                                <div class="slot">O</div>
                                <div class="slot">P</div>
                            </div>
                        </div>
                        
                        <button class="update-button" style="margin-top: 30px;">
                            <i class="fas fa-plus"></i> 添加新卡槽
                        </button>
                    `;
            break;

        case '已保存的卡':
            content.innerHTML = `
                        <div class="device-name">${page}</div>
                        
                        <div class="slot-container">
                            <div class="slot-header">
                                <span>已保存的卡片</span>
                                <span>数量: <span class="slot-count">12</span></span>
                            </div>
                            
                            <div style="margin-top: 20px;">
                                <div style="display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid rgba(80, 110, 220, 0.1);">
                                    <span>门禁卡 A</span>
                                    <span>2023-08-15</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid rgba(80, 110, 220, 0.1);">
                                    <span>电梯卡 B</span>
                                    <span>2023-08-10</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid rgba(80, 110, 220, 0.1);">
                                    <span>车库卡 C</span>
                                    <span>2023-08-05</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid rgba(80, 110, 220, 0.1);">
                                    <span>办公室门卡</span>
                                    <span>2023-07-28</span>
                                </div>
                            </div>
                        </div>
                        
                        <button class="update-button" style="margin-top: 30px;">
                            <i class="fas fa-search"></i> 搜索更多卡片
                        </button>
                    `;
            break;

        /*[+]*/
        case '更新进行中':
            /*[+]*/
            content.innerHTML = `
                     <div class="device-name">正在更新</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-cogs" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <p><progress max="100" value="0" id="updateprogress"> 更新中 </progress></p>
                        </div>
                    `;
            break;

        /*[+]*/
        case '更新完成':
            /*[+]*/
            content.innerHTML = `
                     <div class="device-name">恭喜，更新完成！</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-cogs" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <p>更新完成，${tkymdjs}秒后将自动退出本页面</p>
                     </div>
                    `;
            break;

        // 其他菜单项的内容可以根据需要继续添加
        default:
            content.innerHTML = `
                        <div class="device-name">${page}</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-cogs" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <p>${page}功能正在开发中</p>
                        </div>
                    `;
    }

    // 重新绑定事件
    document.querySelector('.update-button')?.addEventListener('click', updateButtonClickHandler);
}

// 更新按钮点击处理函数
function updateButtonClickHandler() {
    // 添加点击动画
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);

    // 模拟操作过程
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
    this.disabled = true;

    setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
        alert('操作已完成');
    }, 1500);
}
