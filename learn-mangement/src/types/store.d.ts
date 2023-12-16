
//类型声明里面不要直接import....from......
//要使用这种import('@/store') 语法全局引入 
export type RootState = ReturnType<typeof import('@/store').getState>