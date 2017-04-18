<template>
    <div class="patient_list">
      <p>{{ msg }}</p>
      <ul>
        <li><router-link to="/detail">Go to patient list</router-link></li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'patient_list',
		props: [],
		data () {
			return {
				msg: 'This is patient page.',
        patientList: [
          {name: 'Jim', age: 123, }
        ]
      }
		},
		components: {

    }
	}
</script>

<style scoped>

</style>
