let form = document.getElementById("form");
let btn = document.getElementById("submitBtn")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")
btn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    console.log("susdufygsdf")
    formvalidation()
}
);

let formvalidation =()=>{
    if(input.value === ""){
        msg.innerHTML="put in some value plsss"
        console.log("failure")
    }
    else{
        msg.innerHTML=""
        console.log("success")
        acceptData()
    }
}

let data = {};

let acceptData = () =>{
    data["test"] = input.value
    console.log(data)
    createPost()

}

let createPost = ()=>{
    posts.innerHTML += `

    <div> 
    <p>${data.test}</p>
    <span class="options">
        <i class="far fa-edit" onClick = "editPost(this)" ></i>
        <i class="fas fa-trash-alt" onClick = "deletePost(this)" ></i>

      </span>
</div>
    `;
    input.value = ""
}

let deletePost = (e) =>{
    e.parentElement.parentElement.remove()
}

let editPost = (e)=>{
        input.value = e.parentElement.previousElementSibling.innerHTML
}

console.log("hjsdsdfkms dfkjsdffhjsdf")