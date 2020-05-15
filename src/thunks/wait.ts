import { gamePadEvent } from "index";
import { controllerEvent, ControllerEvent } from "utils/controller";

export async function click() {
  return new Promise(resolve => {
    const cleanUp = () => {
      controllerEvent.off(onRead);
    };

    const onRead = (event: ControllerEvent) => {
      if (event !== "Read") {
        return;
      }
      resolve();
      cleanUp();
    };

    controllerEvent.on(onRead);
  });
}
