import {useEffect, useRef, useState} from 'react'

export function usePersistedState(key: string, defaultValue: any = '{}') {
  const [state, setState] = useState(() =>
    localStorage.hasOwnProperty(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : defaultValue,
  )
  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    // console.log(`sotred value ${storedValue}`)
    if (storedValue == null || storedValue === '"{}"')
      localStorage.setItem(key, JSON.stringify(state))
    // localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

// export const usePersistedState = (name: string, defaultValue: any) => {
//   const [value, setValue] = useState(defaultValue)
//   const nameRef = useRef(name)

//   useEffect(() => {
//     try {
//       const storedValue = localStorage.getItem(name)
//       if (storedValue !== null) setValue(storedValue)
//       else localStorage.setItem(name, defaultValue)
//     } catch {
//       setValue(defaultValue)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   useEffect(() => {
//     try {
//       localStorage.setItem(nameRef.current, value)
//     } catch {}
//   }, [value])

//   useEffect(() => {
//     const lastName = nameRef.current
//     if (name !== lastName) {
//       try {
//         localStorage.setItem(name, value)
//         nameRef.current = name
//         localStorage.removeItem(lastName)
//       } catch {}
//     }
//   }, [name])

//   return [value, setValue]
// }
