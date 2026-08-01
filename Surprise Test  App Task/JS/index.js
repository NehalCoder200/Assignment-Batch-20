// console.log('run');

let items = document.getElementById('ekBox')

function loadApp() {

    let api = fetch('https://dummyjson.com/posts').then((res) => {
        return res.json()
    }).then((data) => {

        let allPosts = data.posts

        let result = allPosts.map((postArry) => {

            text = postArry.body

            let ui = 
                `<div class="items" id="ekBox">
                    <p>${text}</p>
                </div>`


            items.innerHTML = ui




        })


    })

    // console.log(api);


}


loadApp()