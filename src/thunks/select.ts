import { dispatch, store } from "../store/store";
import { ControllerEvent, controllerEvent } from "utils/controller";

export async function select2<K extends string>(
  choices: K[],
  option?: {
    colors?: { [V in K]?: number };
    infos?: { [V in K]?: string };
  }
): Promise<K | ""> {
  dispatch({
    type: "ADD_CHOICES",
    payload: {
      groupId: "main",
      choices,
      options: {
        infos: option?.infos || {},
        colors: option?.colors || {}
      }
    }
  });

  return new Promise<K | "">(resolve => {
    const cleanUp = () => {
      controllerEvent.off(onPress);
    };

    const onPress = (event: ControllerEvent) => {
      switch (event) {
        case "Select": {
          const { focused, choices } = store.getState().system.choices;
          resolve(choices[focused] as K);
          cleanUp();
          return;
        }
        case "Back": {
          resolve("");
          cleanUp();
          return;
        }
      }
      switch (event) {
        case "CursorUp": {
          dispatch({ type: "MOVE_FOCUS", payload: { value: -1 } });
          return;
        }
        case "CursorDown": {
          dispatch({ type: "MOVE_FOCUS", payload: { value: 1 } });
          return;
        }
        case "CursorRight": {
          dispatch({ type: "MOVE_FOCUS", payload: { value: -5 } });
          return;
        }
        case "CursorLeft": {
          dispatch({ type: "MOVE_FOCUS", payload: { value: 5 } });
          return;
        }
      }
    };

    controllerEvent.on(onPress);
  });
}
