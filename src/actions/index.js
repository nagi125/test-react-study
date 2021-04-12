export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションクリエイター
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => ({
  type: DECREMENT
})
