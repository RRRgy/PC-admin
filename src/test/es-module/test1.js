
// 1. 默认导出(只能有一个)
const a = 1;
// const b = 2;
export default a;
// export default b;


// 2.导出方式二: 非默认分别导出 (可以有多个)
export const b = 2;
export const c = 3;


const d = 4;
const e = 5;

// 统一暴露
export {
  d,
  e
}