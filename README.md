# system

# ts使用注意事项
1、 使用 仅含类型的导入和导出 形式的语法可以避免潜在的 “仅含类型的导入被不正确打包” 的问题，写法示例如下：
 ```ts
    import type { T } from 'only/types'
    export type { T }
 ```