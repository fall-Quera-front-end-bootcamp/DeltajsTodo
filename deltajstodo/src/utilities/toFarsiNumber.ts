export function toFarsiNumber (n: string): string {
  const farsiDigits: string[] = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹'
  ]

  return n.toString().replace(/\d/g, (x: string | number) => farsiDigits[+x])
}
