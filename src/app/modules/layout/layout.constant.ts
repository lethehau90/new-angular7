
const page = "page"
export const SIDE_BARS = [
    {
        class: 'm-menu__link m-menu__toggle',
        icon: 'glyphicon glyphicon-home',
        name: 'Dashboard',
        router: page + '/dashboard',
        isOpenMenu: false,
        roles: ['Admin', 'Customer', 'Staff']
    },
    {
        class: 'm-menu__link m-menu__toggle',
        icon: 'glyphicon glyphicon-certificate',
        name: 'User',
        router: page + '/user',
        isOpenMenu: false,
        roles: ['Admin'],
        child: [
            {
                nameChild: 'List user',
                class: 'inactive',
                routerChild: page + '/user',
                isSelected: false,
                roles: ['Admin']
            }
        ]
    }
];


