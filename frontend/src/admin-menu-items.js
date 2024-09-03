export default {
    items: [
       
        {
            id: '1',
            title: 'StudentManagement',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'UserManagement',
                    title: 'STUDENT MANAGEMENT',
                    type: 'item',
                    url: '/UserManagement/UserManagement',
                    icon: 'feather icon-trending-up',
                }
            ]
        },
        {
            id: '2',
            title: 'Pass Request',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'StockIn',
                    title: 'PASS REQUEST',
                    type: 'item',
                    url: '/StocksIn/StocksIn',
                    icon: 'feather icon-layers',
                }
            ]
        },
        
        {
            id: '3',
            title: 'LOGOUT',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'Logout',
                    title: 'LOGOUT',
                    type: 'item',
                    url: '/Login',
                    icon: 'feather icon-power',
                }
            ]
        },
    ]
}