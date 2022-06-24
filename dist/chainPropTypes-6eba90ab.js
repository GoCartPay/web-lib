function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }

  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

export { chainPropTypes as c };
//# sourceMappingURL=chainPropTypes-6eba90ab.js.map