//your JS code here. If required.
const form = document.getElementById("formSubmit")

form.addEventListener("submit", (event) => {
       event.preventDefault();

       const name = document.getElementById("name").value
       const age = document.getElementById("age").value

       if(!name || !age){
            alert("inputs cannot be empty.")
            return
       }

       const ageV = Number(age)
           const ageForm = new Promise((resolve, reject) => {
                 setInterval((name,age) => {
                      if(age>18){
                         resolve (``)
                      }
                      else{
                         reject(``)
                      }
                 }, 4000)
            }).then((message) => alert(message) )
            .catch((error) => alert(error))
       
} )

