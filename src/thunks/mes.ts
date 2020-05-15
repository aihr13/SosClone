import { dispatch } from "../store/store";

export function mes(message: string) {
  dispatch({ type: "WRITE_MESSAGE_LOG", payload: message });
}
