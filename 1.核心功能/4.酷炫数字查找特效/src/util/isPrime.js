/**
 * 判断n是不是素数
 * @param {*} n 
 * @returns 
 */
export default function (n) {
  if(n < 2) {
    return false
  }
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false
    }
  }
  return true
}

