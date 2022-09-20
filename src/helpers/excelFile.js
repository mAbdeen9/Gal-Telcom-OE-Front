const excelFile = (dataFromApi) => {
  const file = {};

  dataFromApi.data.data.forEach((o) => {
    for (let i of o._id) {
      if (!file.hasOwnProperty(i.name)) {
        file[i.name] = i.value;
      }

      if (file.hasOwnProperty(i.name)) {
        file[i.name] = +file[i.name] + +i.value;
      }
    }
  });

  return file;
};

export default excelFile;
