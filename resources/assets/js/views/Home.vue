<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="massage" v-for="status in statuses" style="margin:1em">
                    <div class="message-header">
                        <p v-if="status.user!=null">{{status.user.name}}says..</p><p v-else="">Someone says..</p>
                        <p>{{status.created_at|formate}}</p>
                     </div>
                    <div class="message-body">
                        {{status.body}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        mounted() {
            axios.get('/statuses/')
                .then(({data})=>this.statuses=data)
        },
        data(){
            return {
                statuses:[]
            }
        },
        filters:{
            formate(date){ return moment(date).fromNow()}
        }
    }
</script>

<style lang="scss">
div.container {
         margin:2em;
}


</style>
