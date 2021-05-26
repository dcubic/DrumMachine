const CODE_TO_KEY_MAP = {
  81: "Q",
  87: "W",
  69: "E",
  65: "A",
  83: "S",
  68: "D",
  90: "Z",
  88: "X",
  67: "C"
};

export const validKeyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];

export function convertCodeToKey(keycode) {
  return CODE_TO_KEY_MAP[keycode];
}
