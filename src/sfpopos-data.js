import data from './sfpopos-data.json';

data.forEach((obj, i) => {
  // eslint-disable-next-line no-param-reassign
  obj.id = i;
});

export default data;
