<template>
<div>
  <ul>
    <li v-bind:key="project.name" v-for="project in projects">{{project.name}}</li>
  </ul>
</div>
</template>

<script>
import { db } from '../firebase'
export default {
  name: 'Home',
  data: () => ({
    projects: []
  }),
  firestore: {
    projects: db.collection('projects')
  }
}
</script>
