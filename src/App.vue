<template>
  <div>
    <!-- Header Section (You can customize this) -->
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <h1 class="title">The Recipe Book</h1>
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/recipes" class="navbar-item">Recipes</router-link>
            <router-link to="/categories" class="navbar-item">Categories</router-link>
            <router-link to="/profile" class="navbar-item">Profile</router-link>
            <router-link to="/settings" class="navbar-item">Settings</router-link>
          </div>
          <div class="navbar-end">
            <router-link to="/input" class="navbar-item">Add Recipe</router-link>
            <!-- Add user profile info, search bar, notifications, etc., as needed -->
            <div class="navbar-item">
              <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search for recipes">
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Transition Wrapper -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <p>Contact us: example@email.com | Phone: (123) 456-7890</p>
        </div>
        <div class="copyright">
          <p>&copy; 2023 The Recipe Book. All Rights Reserved.</p>
        </div>
        <div class="social-icons">
          <!-- Add social media icons and links here -->
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      // Implement search function
      // Use this.searchQuery to get the user's input later
    },
  },
};
</script>

<style>

/* transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Add your navigation bar styles here */
.navbar {
  background-color: #007BFF;
  padding: 10px 0;
}

.navbar-brand .title {
  color: #fff;
  font-size: 28px;
  font-weight: bold;
}

.navbar-item {
  color: #fff;
  font-weight: bold;
}

/* Style for the search input field */
.navbar-item input[type="text"] {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px; 
}

/* Add your footer styles here */
.footer {
  background-color: #007BFF;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer p {
  font-weight: bold;
}

/* social icons */
.social-icons {
  margin-top: 10px; 
}

.social-icons a {
  margin-right: 10px; 
  color: #fff;
  font-size: 24px;
}


</style>
