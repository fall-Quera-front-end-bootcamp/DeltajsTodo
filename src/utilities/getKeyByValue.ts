const getKeyByValue = <T extends Record<string, string>>(
  object: T,
  value: string
): keyof T | undefined => {
  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      if (object[prop] === value) return prop
    }
  }
  return undefined
}

export default getKeyByValue
