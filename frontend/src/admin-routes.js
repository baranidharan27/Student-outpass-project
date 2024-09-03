import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
const StocksIn = React.lazy(() => import('./BillingApp_Components/StocksIn/StocksIn'));
const Login = React.lazy(() => import('./BillingApp_Components/Authentication/SignIn/SignIn1'));
const UserCreations = React.lazy(() => import('./BillingApp_Components/UserCreations/UserCreations'));

const routes = [
    { path: '/StocksIn/StocksIn', exact: true, name: 'Default', component:StocksIn },
    { path: '/Login', exact: true, name: 'Default', component:Login } ,
    { path: '/UserManagement/UserManagement', exact: true, name: 'Default', component:UserCreations },

];

export default routes;