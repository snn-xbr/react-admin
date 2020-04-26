const menuList = [
    {
        key: '/home',
        title: '首页',
        icon: 'home'
    }, {
        key: '/products',
        title: '产品',
        icon: 'products',
        children: [
            {
                key: '/category',
                title: '产品种类',
                icon: 'appstore'
            }, {
                key: '/product',
                title: '产品管理',
                icon: 'product'
            }
        ]
    }, {
        key: '/user',
        title: '用户管理',
        icon: 'user'
    }, {
        key: '/role',
        title: '角色管理',
        icon: 'role'
    }, {
        key: '/graphic',
        title: '图形图表',
        icon: 'graphic',
        children: [
            {
                key: '/line',
                title: '折线图',
                icon: 'line'
            }, {
                key: '/pie',
                title: '圆饼图',
                icon: 'pie' 
            }, {
                key: '/bar',
                title: '柱形图',
                icon: 'bar'    
            }
        ]
    }
]

export { menuList };