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
            const response = await axios.get("https://openlibrary.org/search.json?q=" + this.query); //http://openlibrary.org/search.json?q=the+lord+of+the+rings
            console.log(response);
            // this.results = response.data.docs;

            // let numfound = response.data.numFound;
            for(let i = 0; i < 100; i++)
            {
                if(typeof response.data.docs[i].publish_date !== 'undefined')
                {
                    this.results.push(
                    {
                        title: response.data.docs[i].title,
                        author_name: response.data.docs[i].author_name[0],
                        publish_date: response.data.docs[i].publish_date[0],
                    });
                }
                else
                {
                    this.results.push(
                        {
                            title: response.data.docs[i].title,
                            author_name: response.data.docs[i].author_name[0],
                        });
                }
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
            }

            this.loading = false;
        }
    }
})