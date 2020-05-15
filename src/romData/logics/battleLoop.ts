//@ts-check

import { mes } from "../../thunks/mes";
import { reload } from "../../thunks/reload";
import { Character } from "../../store/typing/Ram/Character";
import { sample } from "../../utils/sample";
import { keys } from "../../utils/keys";
import { mesW } from "../../thunks/mesW";

const MAX_TURN = 16;

export async function battleLoop(player: Character, target: Character) {
  player = reload(player);
  target = reload(target);

  for (let i = 1; i <= MAX_TURN; i++) {
    mes(`turn: ${i}/${MAX_TURN}`);

    // 動けるメンバーが各自行動を行う
    const members = [player, target];
    /** @note きちんと await するために for である必要があります */
    for (let main of members) {
      // スキル使用対象を自分以外からランダムで選ぶ
      const others = members.filter((member) => member !== main);
      let currentTarget = sample(others);
      if (currentTarget === undefined) {
        await mesW("対象にできる相手がいません！");
        return;
      }

      // データを最新の状態にする
      main = reload(main);
      currentTarget = reload(currentTarget);

      // 使用するスキルの選択
      const skills = keys(main.deck).filter((key) => main.deck[key]);
      const skill = sample(skills);

      // スキルの使用
      if (skill !== undefined) {
        //await useSkill(main, currentTarget, skill);
      } else {
        await mesW(`${main.呼び名} は何もしなかった`);
      }
    }
  }
}
