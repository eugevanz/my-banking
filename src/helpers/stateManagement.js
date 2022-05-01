import create from 'zustand';
import { Vector3 } from 'three';

const useStore = create((set) => ({
  positions: {
    home: {
      position: new Vector3(0, 0, 0),
    },
    views: {
      position: new Vector3(-0.8, 1.2, 9),
    },
    first: {
      position: new Vector3(-2.3, 1.6, 1.4),
    },
    second: {
      position: new Vector3(2.3, 2.3, 1),
    },
    third: {
      position: new Vector3(-2, 0.5, 4.8),
    },
  },
  frustrum: {
    position: new Vector3(48, 0, 0),
  },
  selectPosition: (name) =>
    set(({ positions }) => ({ frustrum: positions[name] })),
}));

export default useStore;
