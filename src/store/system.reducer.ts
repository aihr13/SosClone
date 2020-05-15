import produce from "immer";

export type SystemState = {
  choices: {
    choices: string[];
    focused: number;
    options: {
      disables: { [key: string]: true };
      infos: { [key: string]: string };
    };
  };
  messageLogs: string[];
};

export type SystemActionType =
  | { type: "WRITE_MESSAGE_LOG"; payload: string }
  | {
      type: "ADD_CHOICES";
      payload: {
        groupId: string;
        choices: string[];
        options: {
          disables: { [key: string]: true };
          infos: { [key: string]: string };
        };
      };
    }
  | { type: "FOCUS_CHOICE"; payload: { group: string; index: number } }
  | { type: "MOVE_FOCUS"; payload: { value: number } };

export function systemReducer(
  state: SystemState = {
    choices: { choices: [], options: { disables: {}, infos: {} }, focused: 0 },
    messageLogs: []
  },
  action: SystemActionType
): SystemState {
  switch (action.type) {
    case "WRITE_MESSAGE_LOG":
      return produce(state, draft => {
        draft.messageLogs.push(action.payload);
        return draft;
      });
    case "ADD_CHOICES":
      return produce(state, draft => {
        const { groupId, choices, options } = action.payload;
        draft.choices = {
          choices,
          focused: 0,
          options
        };
        return draft;
      });
    case "FOCUS_CHOICE":
      return produce(state, draft => {
        const { group, index } = action.payload;

        draft.choices.focused = index;
      });
    case "MOVE_FOCUS":
      return produce(state, draft => {
        const value = action.payload.value;
        const { focused, choices } = draft.choices;
        const newIndex = focused + value;
        if (choices[newIndex] == null) {
          return draft;
        }

        draft.choices.focused = newIndex;
      });
    default:
      return state;
  }
}
