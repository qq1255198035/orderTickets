import Vue from "vue";
const user = {
  state: {
    firstName: "",
    lastName: "",
    tel: "",
    sex: "",
    avatar: "",
    email: ""
  },
  mutations: {
    SET_FNAME: (state, fname) => {
      state.firstName = fname;
    },
    SET_LNAME: (state, lname) => {
      state.lastName = lname;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_TEL: (state, tel) => {
      state.tel = tel;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_SEX: (state, sex) => {
      state.sex = sex;
    }
  },
  actions: {
    changefName({ commit }, name) {
      commit("SET_FNAME", name);
    },
    changelName({ commit }, name) {
      commit("SET_LNAME", name);
    },
    changeSex({ commit }, sex) {
      commit("SET_SEX", sex);
    },
    changeEmail({ commit }, email) {
      commit("SET_EMAIL", email);
    },
    changeTel({ commit }, tel) {
      commit("SET_TEL", tel);
    },
    changeAvatar({ commit }, avatar) {
      commit("SET_AVATAR", avatar);
    }
  }
};
export default user;