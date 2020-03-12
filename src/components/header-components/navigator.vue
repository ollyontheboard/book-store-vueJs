<template>
    <div class="navigator">
        <div class="header-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="header-phone ">
                            <div class="icon">
                                <i class="fas fa-headphones-alt"></i>
                            </div>
                            <div class="text">
                                <p>Free Support 24/7</p>
                                <p class="font-weight-bold number">+01-202-555-0181</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9" >
                        <div class="main-navigation flex-lg-right">
                            <ul class="main-menu menu-right li-last-0">
                                <li class="menu-item">
                                    <router-link to="/" >Home</router-link><i></i>
                                </li>
                                <!-- Shop -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">About <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Pages -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">Blog <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Blog -->
                                <li class="menu-item">
                                  <router-link to="/faq">Faq<i
                                            class="fas fa-chevron"></i></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/contact">Contact</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigator"
    }
</script>

<style scoped>

</style>
