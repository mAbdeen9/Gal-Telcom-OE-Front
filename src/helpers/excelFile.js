const excelFile = (dataFromApi) => {
  const file = {};

  dataFromApi.data.data.forEach((o) => {
    for (let i of o._id) {
      if (file.hasOwnProperty(i.name)) {
        file[i.name] = Number(file[i.name]) + Number(i.value);
      }

      if (!file.hasOwnProperty(i.name)) {
        file[i.name] = i.value;
      }
    }
  });

  return file;
};

export const excelFileAll = (dataFromApi) => {
  const files = [];

  dataFromApi.data.data.forEach((o) => {
    files.forEach((i, e) => {
      if (i.user === o.user) {
        files.splice(e, 1);
      }
    });

    files.push({ user: o.user });
  });

  files.forEach((user) => {
    dataFromApi.data.data.forEach((o) => {
      if (o.user === user.user) {
        for (let i of o._id) {
          if (user.hasOwnProperty(i.name)) {
            user[i.name] = Number(user[i.name]) + Number(i.value);
          }

          if (!user.hasOwnProperty(i.name)) {
            user[i.name] = i.value;
          }
        }
      }
    });
  });

  return files;
};

export default excelFile;
