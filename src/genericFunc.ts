function echo<T>(objeto: T): T {
  return objeto
}

console.log(echo<number>(1))
