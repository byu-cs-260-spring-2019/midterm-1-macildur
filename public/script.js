let app = new Vue
({
    el: "#app",

    data:
    {
        query: '',
        results: [],
        images: [],
        loading: false,
    },

    methods:
    {
        async search_query()
        {
            this.loading = true;
            const response = await axios.get("http://openlibrary.org/search.json?q=" + this.query); //http://openlibrary.org/search.json?q=the+lord+of+the+rings
            console.log(response);
            this.results = response.data.docs;

            // let numfound = response.data.numFound;
            // for(let i = 0; i < numfound; i++)
            // {
            //     const imgresponse = await axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:" + response.data.docs[i].isbn + "&format=json");
            //     console.log(imgresponse);
            //     for (let key in imgresponse)
            //     {
            //         if (key === "thumbnail_url")
            //         {
            //              this.images.push({image: imgresponse[key]});
            //              console.log(imgresponse[key])
            //         }
                
            //     }
            // }

            this.loading = false;
        }
    }
})