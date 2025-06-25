/*****感谢所有参与到网站制作、找问题的用户****\
****以下为参与到网站制作、找问题的用户名单****
**********************************************
*** 参与编辑：                             ***
***            @砸龙换新的             	   ***
***             @编织 @梦                  ***
***              @小晨喵                   ***
***          @辞.变色龙中间商              ***
**********************************************
*** 参与检查：                             ***
***            @砸龙换新的       	       ***
***             @编织 @梦                  ***
***            @NodYoung                   ***
***               @撕夜                    ***
***              @小晨喵                   ***
***              @贺之然                   ***
*********以及所有访问过网站的用户*************
**********************************************
*** 参与模拟操作编辑：                     ***
***            @砸龙换新的           	   ***
***          @辞.变色龙中间商              ***
**********************************************
*** 参与部署：                             ***
***      @MR.SIX（cu.511116.xyz /）        ***
***   @编织 @梦（video.majunfei.club）     ***
***            @砸龙换新的                 ***
**https://banming.dpdns.org/ChameleonUltra/ **
**********************************************/
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

// 16卡槽跳转至首页


// 卡槽悬停效果
const slots = document.querySelectorAll('.slot');
slots.forEach(slot => {
    slot.addEventListener('click', function () {
        slots.forEach(s => s.style.boxShadow = '0 4px 10px rgba(0, 0, 20, 0.4)');
        this.style.boxShadow = '0 0 15px rgba(255, 0, 0, 1)';
    });
});

// 状态指示灯动画
const indicator = document.querySelector('.status-indicator-red');
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
            <div class="status-bar">

                <div class="connection-status statusconnected" style="display:none;">
                    <div class="status-indicator-green"></div>
                    <span>已连接</span>
                </div>
            </div>

            <div class="device-status">

                <div class="statusdisconnection">
                    <div class="status-item">
                        <span class="status-label">未连接Chameleon Ultra</span>
                            <div class="status-value" style="text-align: center;">
                                请连接设备<i class="fas fa-link"></i>
                            </div>
                    </div>
                </div>

                <div class="statusconnected" style="display:none;">
                    <div class="status-item">
                        <span class="status-label">设备标识</span>
                        <div class="status-value">
                            D8:62:DE:56:B7:71
                            <span class="status-error">×</span>
                        </div>
                    </div>
                </div>

                <div class="device-name">Chameleon Ultra</div>

                <div class="slot-container">
                    <div class="slot-header">
                        <span>卡槽状态</span>
                        <span>已使用的卡槽: <span class="slot-count">3/16</span></span>
                    </div>

                    <div class="slots">
                        <div class="slot">1</div>
                        <div class="slot">2</div>
                        <div class="slot">3</div>
                        <div class="slot">4</div>
                        <div class="slot">5</div>
                        <div class="slot">6</div>
                        <div class="slot">7</div>
                        <div class="slot">8</div>
                        <div class="slot">9</div>
                        <div class="slot">10</div>
                        <div class="slot">11</div>
                        <div class="slot">12</div>
                        <div class="slot">13</div>
                        <div class="slot">14</div>
                        <div class="slot">15</div>
                        <div class="slot">16</div>
                    </div>
                </div>

                <div class="device-logo">Chameleon Ultra</div>

                <div class="firmware-info" style="">
                    <span class="firmware-label">轮询固件版本:</span>
                    <span class="firmware-version">
                        v3.0-29-qc955c4f
                        <button class="update-button">
                        </button>
                    </span>
                </div>
                <div>

                </div>
            </div>

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
                            
                        <button class="kacao">
                            卡槽1
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽2
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽3
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽4
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽5
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽6
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽7
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽8
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽9
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽10
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽11
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽12
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽13
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽14
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽15
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button><br>

                        <button class="kacao">
                            卡槽16
                        <div class="arrows">完整体验请使用变色龙轮询16卡固件（点我跳转）</div>
                        </button>
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
                            <i class="fas fa-spinner fa-spin" style="font-size: 48px; margin-bottom: 20px;"></i>
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
                            <i class="fas fa-check" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <p>更新已成功完成，感谢您的耐心等待！<br>本页面将在3秒后自动退出</p>
                            <button onclick="updateMainContent('首页')" class="button">立即退出</button>
                     </div>
                    `;
            break;
        /*[+]*/
        case '读取卡片':
            /*[+]*/
            content.innerHTML = `
                     <div class="device-name">${page}</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-check" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <button onclick="alert('读卡完成，已自动保存')" class="button">读卡</button>
                     </div>
                    `;
            break

        case '写入卡片':
            /*[+]*/
            content.innerHTML = `
                     <div class="device-name">${page}</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-check" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <button onclick="alert('写卡完成')" class="button">写卡</button>
                     </div>
                    `;
            break;

        // 其他菜单项的内容可以根据需要继续添加
        default:
            content.innerHTML = `
                        <div class="device-name">${page}</div>
                        <div style="text-align: center; margin-top: 40px; color: #8a9bb8;">
                            <i class="fas fa-cogs" style="font-size: 48px; margin-bottom: 20px;"></i>
                            <p>抱歉，模拟${page}功能正在开发中，请您耐心等待。</p>
                        </div>
                    `;
    }

    // 重新绑定事件
    document.querySelector('.update-button')?.addEventListener('click', updateButtonClickHandler);
}

// 绑定连接按钮点击事件 
document.querySelector('.connect')?.addEventListener('click', connect);  

// 连接按钮点击处理函数
function connect() {
    // 模拟连接过程
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 连接中...';
    this.disabled = true;
    setTimeout(() => {
        this.innerHTML = originaldText;
        this.disabled = false;
        alert('连接成功！');
        updateMainContent('首页'); // 更新内容为“首页”页面
        document.querySelector('.statusdisconnection').style.display = 'none'; // 隐藏未连接状态
        document.querySelector('.statusconnection').style.display = 'inline'; // 显示已连接状态
    }, 1500);
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
