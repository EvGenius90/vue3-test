<template>
  
  <div class="wrapper">
    <Header />
      <div class="wrapper-content">
        <div class="container">
          <router-view/>
          <Main/>
        </div>
        
      </div>
    <Footer />
  </div>
  
</template>

<script>

import Header from '@/components/header'
import Footer from '@/components/footer'
import Main from '@/components/main'


export default {
  components: {Header, Footer, Main},
}

</script>

<style></style>
