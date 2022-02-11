const state = {
    sideBarOpen: false,
};

const getters = {
    sideBarOpen(state) {
        return state.sideBarOpen;
    },
};

const mutations = {
    toggleSidebar(state) {
        state.sideBarOpen = !state.sideBarOpen;
    },
};

const actions = {
    toggleSidebar({ commit }) {
        commit("toggleSidebar");
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
};
