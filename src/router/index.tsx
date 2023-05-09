import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { MenuRouterType } from "@/types/router.ts"
import { } from '@ant-design/icons';

export const menuRouter: MenuRouterType[] = [
    {
        path: 'home',
        key: "home",
        label: "主页",
        icon: "",
        element: RouteWithSubRoutes(lazy(() => import("@/pages/home/index.tsx")))
    },
    {
        path: 'setting',
        key: "setting",
        label: "设置",
        icon: "",
        element: RouteWithSubRoutes(lazy(() => import("@/pages/seting/index.tsx")))
    },
]

const publicRouter: MenuRouterType[] = [
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



