const getters = {
  avatar: state => state.user.avatar,
  firstName: state => state.user.firstName,
  lastName: state => state.user.lastName,
  tel: state => state.user.tel,
  sex: state => state.user.sex,
  email: state => state.user.email
};

export default getters
