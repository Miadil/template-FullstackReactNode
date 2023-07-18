import { useState } from "react"

export default function Counter(props) {
  const [count, setCount] = useState(0)

  return (
    <p>
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        count is: {count} {props.poulet}
      </button>
    </p>
  )
}
