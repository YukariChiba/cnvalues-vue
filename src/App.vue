<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
    <Notice />
  </v-app>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Notice from "@/components/modals/Notice";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Notice
  }
};
</script>
