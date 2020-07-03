const formatDate = (value: Date): string => {
  return new Date(value).toLocaleDateString('pt-br');
};

export default formatDate;
