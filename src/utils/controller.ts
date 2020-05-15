import { TypedEvent } from "./typedEvent";
import { Key } from "./keyCodeEnum";

type StandaredGamepadButtons =
  | "button0"
  | "button1"
  | "button2"
  | "button3"
  | "button4"
  | "button5"
  | "button6"
  | "button7"
  | "button8"
  | "button9"
  | "button10"
  | "button11"
  | "button12"
  | "button13"
  | "button14"
  | "button15";

type StandaredGamepadAxis = "axis0" | "axis1" | "axis2" | "axis3";

export type ControllerEvent =
  | "Select"
  | "Back"
  | "Read"
  | "CursorUp"
  | "CursorDown"
  | "CursorRight"
  | "CursorLeft";

type controllerMap<EventName extends string> = {
  [E in EventName]: {
    hwGamepad?: {
      buttons?: StandaredGamepadButtons[];
      axis?: StandaredGamepadAxis[];
    };
    hwKeyboard?: Array<Key>;
    touchs?: {
      actions?: string[];
    };
  };
};

/** Keyboard */
let keyStates: { [K in Key]?: true } = {};

export const controllerEvent = new TypedEvent<ControllerEvent>();

const keyMaps: controllerMap<ControllerEvent> = {
  Select: {
    hwKeyboard: [Key.Enter, Key.Z]
  },
  Back: {
    hwKeyboard: [Key.X]
  },
  Read: {
    hwKeyboard: [Key.X, Key.Z, Key.Space, Key.Enter]
  },
  CursorUp: {
    hwKeyboard: [Key.UpArrow, Key.W]
  },
  CursorDown: {
    hwKeyboard: [Key.DownArrow, Key.S]
  },
  CursorRight: {
    hwKeyboard: [Key.RightArrow, Key.D]
  },
  CursorLeft: {
    hwKeyboard: [Key.LeftArrow, Key.A]
  }
};

export function useController() {
  window.addEventListener("keydown", _ => {
    // @ts-ignoreF
    keyStates[_.keyCode] = true;
  });

  window.addEventListener("keyup", _ => {
    // @ts-ignore
    keyStates[_.keyCode] = false;
  });

  document.addEventListener("visibilitychange", _ => {
    if (document.hidden) {
      keyStates = {};
    }
  });

  const emit = () => {
    let eventType: ControllerEvent;
    for (eventType in keyMaps) {
      const isPressing = keyMaps[eventType].hwKeyboard?.some(
        keyCode => keyStates[keyCode]
      );
      if (isPressing) {
        controllerEvent.emit(eventType);
      }
    }

    window.requestAnimationFrame(emit);
  };

  emit();
}
