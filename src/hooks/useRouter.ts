import { menuRouter } from "@/router/index"
function getRouterDetails(pathKey: string) {
    let res:any = {};
    menuRouter.map((item) => {
        if (item.path === pathKey) {
            res = item;
        }
        if (item.children && item.children.length) {
            
        }
    })
}

export { getRouterDetails };