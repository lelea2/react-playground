const makeRandomId = () => {
  // Naive implementation. Do not use. 
  return Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
}

export default makeRandomId;