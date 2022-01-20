const app = new Vue({
    el: "#app",
    data: {
        database: [],
    },
    created() {
        axios.get("http://localhost/php-ajax-dischi/b_dischi.php")
        .then( (response) => {
            this.database = response.data;
        });
    }
});