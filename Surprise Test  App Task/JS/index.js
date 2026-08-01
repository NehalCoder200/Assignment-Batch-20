// console.log('run');

let items = document.getElementById('ekBox')
let textRead = document.getElementById('textRead')


function loadApp() {

    let api = fetch('https://dummyjson.com/posts').then((res) => {
        return res.json()
    })
        .then((data) => {

            let allPosts = data.posts

            let result = allPosts.map((postArry) => {

                text = postArry.body

                return `<p onclick="clickData(event)">${text}</p>`

            })
            // console.log(result);

            items.innerHTML = result

            console.log(items);
            

        })

    // console.log(api);


}

let clickData = (e) =>{

    textRead.innerHTML = e.target.innerHTML
    
}





loadApp()