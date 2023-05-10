# system

# ts使用注意事项
1、 使用 仅含类型的导入和导出 形式的语法可以避免潜在的 “仅含类型的导入被不正确打包” 的问题，写法示例如下：
 ```ts
    import type { T } from 'only/types'
    export type { T }
 ```
 
 # 国际化配置
 1、下载i18n ally 插件，便于在开发过程中维护语料