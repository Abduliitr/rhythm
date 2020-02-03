export const validate = data => {
  const error = {};
  Object.keys(data).map(q => {
    if (data[q] === null || data[q] === "")
      error[q] = "This Field cannot be empty";
  });
  return { error, validated: Object.keys(error).length === 0 };
};
