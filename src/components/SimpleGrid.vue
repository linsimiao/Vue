<template id="grid-template">
  <table>
    <thead>
    <tr>
      <th v-for="col in columns">
        {{ col | capitalize}}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(index,entry) in dataList">
      <td v-for="col in columns">
        {{entry[col]}}
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
    export default {
        data () {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.

            }
        }
    }
</script>
