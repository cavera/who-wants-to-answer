export const decodeString = (encodedString: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(encodedString, 'text/html')
  const decoded = doc.documentElement.textContent || ''
  return decoded
}
