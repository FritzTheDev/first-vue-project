<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">Syndicated Opportunities<br /><span class="subtitle">Impact Matters</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link sign-in" href="#">Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link invest-now" href="#">Invest Now!</a>
          </li>
        </ul>
      </div>
    </nav>    
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .subtitle {
    font-size: .85em;
    color: white !important;
  }
  .invest-now {
    font-size: 1.5em !important;
    background-color: red !important;
    border-radius: 5px;
    text-align: center;
  }
  .sign-in {
    padding-right: 20px !important;
  }
</style>
