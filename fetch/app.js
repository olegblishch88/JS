document.getElementById('button1').addEventListener('click', getTextData);
document.getElementById('button2').addEventListener('click', getJsonData);
document.getElementById('button3').addEventListener('click', getAPIData);


// Get Local file data
function getTextData(){
    fetch('data.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err)
    })
}

// Get local JSON file data
function getJsonData(){
    fetch('data.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output += `
            <ul>
            <li>${post.title}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
}

//Get external API Data

function getAPIData(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `
            <ul>
                <li>${user.login}</li>
            </ul>
            `
        });
        document.body.innerHTML = output;
    })
}




















