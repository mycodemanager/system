import React, { lazy } from 'react';
import { useRoutes,Navigate } from 'react-router-dom';
import { MenuRouterType } from "@/types/router.ts"
import { AppstoreOutlined,SettingOutlined } from '@ant-design/icons';

export const menuRouter: MenuRouterType[] = [
    {
        path: 'home',
        key: "home",
        label: "主页",
        icon: <AppstoreOutlined />,
        element: RouteWithSubRoutes(lazy(() => import("@/pages/home/index.tsx"))),
        meta:{
            title: "主页",
            auth:1,
            keepAlive:true
        }
    },
    {
        path: 'setting',
        key: "setting",
        label: "设置",
        icon: <SettingOutlined />,
        children:[
            {
                path: 'user',
                key: "user",
                label: "用户管理",
                element: RouteWithSubRoutes(lazy(() => import("@/pages/seting/user"))),
                meta:{
                    title: "用户管理",
                    auth:1,
                    keepAlive:true
                }
            },
            {
                path: 'role',
                key: "role",
                label: "角色管理",
                element: RouteWithSubRoutes(lazy(() => import("@/pages/seting/role"))),
                meta:{
                    title: "角色管理",
                    auth:2,
                    keepAlive:true
                }
            },
        ]
    },
]

const publicRouter: MenuRouterType[] = [
    {
        path: '/',
        key: "/",
        label: "登录",
        element: <Navigate to={"/log-in"} />
    },
    {
        path: 'log-in',
        key: "log-in",
        label: "登录",
        element: RouteWithSubRoutes(lazy(() => import("@/pages/auth/signIn")))
    },
    {
        path: 'sign-up',
        key: "sign-up",
        label: "注册",
        element: RouteWithSubRoutes(lazy(() => import("@/pages/auth/signUp")))
    },
    {
        path: 'layout',
        key: "layout",
        label: "layout",
        element: RouteWithSubRoutes(lazy(() => import("@/layout/index"))),
        children: menuRouter
    },
]

function RouteWithSubRoutes(Children: React.LazyExoticComponent<() => JSX.Element>) {
    return <React.Suspense fallback={<div>Loading...</div>}>
        <Children />
    </React.Suspense>
}

export function RenderRoutes() {
    const routerEl = useRoutes(publicRouter)
    return routerEl
}



