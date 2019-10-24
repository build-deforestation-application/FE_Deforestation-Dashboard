export default (obj, sel) => {
    return Object.entries(obj).filter(x => x[0] !== sel[0] && x[0] !== sel[1]);
  };