import { createStore } from "vuex";
import ui from "./modules/ui";

const store = createStore({
    modules: {
        ui,
    },
});

export default store;
