export const MESSAGE_SERVER_ERROR = {
    RESPOND: 'Server did not respond correctly',
    REFRESH: 'Please try again later or refresh page',
    NETWORK: 'Network error'
  };
  
  export const access_token = "access_token";
  export const page_login = "login";
  export const isDashboard = "isDashboard";
  export const token = "token";


  export const SIDE_BARS = [
    {
        class: 'm-menu__link m-menu__toggle',
        icon: 'glyphicon glyphicon-home',
        name: 'Dashboard',
        router:'/dashboard',
        isOpenMenu: false,
        roles: ['Admin', 'Customer', 'Staff']
    },
    {
        class: 'm-menu__link m-menu__toggle',
        icon: 'glyphicon glyphicon-certificate',
        name: 'User',
        router: '/user',
        isOpenMenu: true,
        roles: ['Admin'],
        child: [
            {
                nameChild: 'List user',
                class: 'inactive',
                routerChild: '/list-user',
                isSelected: false,
                roles: ['Admin']
            }
        ]
    },
    {
        class: 'm-menu__link m-menu__toggle',
        icon: 'glyphicon glyphicon-certificate',
        name: 'Role',
        router: '/role',
        isOpenMenu: false,
        roles: ['Admin'],
        child: [
            {
                nameChild: 'List roles',
                class: 'inactive',
                routerChild: '/list-role',
                isSelected: false,
                roles: ['Admin']
            }
        ]
    }
];
