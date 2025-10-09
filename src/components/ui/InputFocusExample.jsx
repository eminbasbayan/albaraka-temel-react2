import { useEffect, useRef } from 'react'

const InputFocusExample = () => {
    const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  return (
    <input ref={inputRef} />
  )
}

export default InputFocusExample

// ⚡ Performans	Değer değişse bile render tetiklemez. Gereksiz re-render engellenir.

// 🔗 DOM erişimi	Gerçek DOM elemanlarına direkt erişim sağlar (örneğin focus, scroll, video.play() gibi).

// 🧩 Stabil referans	Her render’da aynı ref nesnesi döner, bu sayede “sabit referans” gibi kullanılabilir.

// 🕓 Önceki değer saklama	State değişiklikleri arasında önceki değeri hatırlamak için idealdir.