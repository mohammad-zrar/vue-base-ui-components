<template>
  <nav :class="{ changeNavHieght: classObjec.changeNavHieght }">
    <div class="navbar">
      <div class="nav-brand">
        <h1>Base UI</h1>
      </div>

      <ul class="nav-menu" :class="{ collapsed: classObjec.collapsed }">
        <li class="nav-item"><a href="#">Buttons</a></li>
        <li class="nav-item"><a href="#">Base Dialog</a></li>
        <li class="nav-item"><a href="#">Login</a></li>
      </ul>
    </div>
    <button @click="toggle" class="nav-toggler">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        size="lg"
        style="color: #ffffff"
      />
    </button>
  </nav>
</template>
<script setup>
import { reactive, computed } from "vue";

const classObjec = reactive({
  collapsed: false,
  changeNavHieght: false,
});
function toggle() {
  classObjec.collapsed = !classObjec.collapsed;
  classObjec.changeNavHieght = !classObjec.changeNavHieght;
}
</script>

<style scoped>
nav {
  background-color: #334257;
  padding: 1rem 5rem;
  display: block;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
  height: 1.9rem;
  transition: height 0.25s ease;
}
.navbar {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}

.nav-brand {
  color: #fff;
}

.nav-toggler {
  background-color: inherit;
  outline: none;
  border: none;
  border: 2px solid #fff;
  padding: 0.25rem;
  border-radius: 3px;
  display: none;
  cursor: pointer;
}
.nav-toggler:hover,
.nav-toggler:active {
  transform: scale(1.05);
}
.nav-menu {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
.nav-item {
  margin: 0 1.75rem;
}
.nav-item a {
  text-decoration: none;
  color: #fff;
  transition: all 0.1s ease-in-out;
  padding: 0.15rem;
}
.nav-item a:hover,
.nav-item a:active {
  border-bottom: 2px #fff solid;
}
@media screen and (max-width: 768px) {
  nav {
    padding: 1rem 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  .nav-toggler {
    display: flex;
    height: 28px;
  }
  .nav-menu {
    display: none;
    position: relative;
    bottom: 0.9rem;
  }

  .navbar {
    display: grid;
  }
  .nav-item {
    margin: 0 0 0.2rem;
  }
  .changeNavHieght {
    height: 10rem;
  }
  .collapsed {
    display: grid;
  }
}
</style>
