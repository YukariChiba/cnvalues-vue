import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
          light: {
            primary: "#009688",
            // secondary: "#b0bec5",
            // accent: "#8c9eff",
            // error: "#b71c1c"
          },
        },
      },
});
