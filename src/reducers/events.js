// 状態の変更を担う
import { READ_EVENTS } from "../actions"

const switchEvents = (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return state
    default:
      return state
  }
}

export default switchEvents