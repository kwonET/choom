export const selectFile = (pos, emo, type) => {
  if (pos === "lay") {
    /**
     * lay
     */
    if (emo === "happy") {
      switch (type) {
        case 1: //엎드려
          return "5K7A0020";
        case 2: //정자세
          return "5K7A0016";
        case 3: //웅크려
          return "5K7A0020";
        default:
          return 0;
      }
    } else if (emo === "angry") {
      switch (type) {
        case 1: //엎드려
          return "5K7A0052";
        case 2: //정자세
          return "5K7A0053";
        case 3: //웅크려
          return "5K7A0054";
        default:
          return 0;
      }
    } else if (emo === "sad") {
      switch (type) {
        case 1: //엎드려
          return "5K7A0037";
        case 2: //정자세
          return "5K7A0036";
        case 3: //웅크려
          return "5K7A0038";
        default:
          return 0;
      }
    }
  } else if (pos === "stand") {
    /**
     * stand
     */
    if (emo === "happy") {
      switch (type) {
        case 1: //위
          return "5K7A0022";
        case 2: //아래
          return "5K7A0024";
        case 3: //팔
          return "5K7A0026";
        default:
          return 0;
      }
    } else if (emo === "angry") {
      switch (type) {
        case 1: //
          return "5K7A0055";
        case 2: //
          return "5K7A0056";
        case 3: //
          return "5K7A0058";
        default:
          return 0;
      }
    } else if (emo === "sad") {
      switch (type) {
        case 1: //
          return "5K7A0039";
        case 2: //
          return "5K7A0040";
        case 3: //
          return "5K7A0041";
        default:
          return 0;
      }
    }
  } else if (pos === "sit") {
    /**
     * sit
     */
    if (emo === "happy") {
      switch (type) {
        case 1: //아빠
          return "5K7A0028";
        case 2: //무릎
          return "5K7A0030";
        default:
          return 0;
      }
    } else if (emo === "angry") {
      switch (type) {
        case 1: //
          return "5K7A0059";
        case 2: //
          return "5K7A0060";

        default:
          return 0;
      }
    } else if (emo === "sad") {
      switch (type) {
        case 1: //
          return "5K7A0042";
        case 2: //
          return "5K7A0044";

        default:
          return 0;
      }
    }
  } else if (pos === "move") {
    /**
     * move
     */
    if (emo === "happy") {
      switch (type) {
        case 1: //걸으
          return "5K7A0031";
        case 2: //어깨
          return "5K7A0035";
        case 3: //고개
          return "5K7A0032";
        default:
          return 0;
      }
    } else if (emo === "angry") {
      switch (type) {
        case 1: //
          return "5K7A0062";
        case 2: //
          return "5K7A0064";
        case 3: //
          return "5K7A0065";
        default:
          return 0;
      }
    } else if (emo === "sad") {
      switch (type) {
        case 1: //
          return "5K7A0047";
        case 2: //
          return "5K7A0048";
        case 3: //
          return "5K7A0049";
        default:
          return 0;
      }
    }
  }
};
