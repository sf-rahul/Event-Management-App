<template>
  <div id = "register">
  <div class="register-form"> 
       <form @submit.prevent= "onSubmit">
         <div class="input">
             <label for="name" > Full Name : </label>
             <input type="text" id = "name" v-model="fullname" >
          </div>  
           <div class="input">
             <label for="mobile" > Phone : </label>
             <input type="text" id = "mobile" v-model="mobile" >
          </div>  
           <div class="input">
             <label for="email" > Email : </label>
             <input type="email" id = "email" v-model="email" >
          </div> 
          <div class="input">
             <label for="file" > Upload Id Card(formats:jpeg,png) : </label>
             <input type="file" id = "file" ref = "file" v-on:change= "handleFileUpload" >
          </div>   

           <div class="input">
             <label for="name" > For : </label>
             <input type="text" id = "name" v-model="fullname" >
          </div> 
          <div class="input">
            <label for = "tickets" > No Of Tickets : </label>
            <input type="number" id="tickets" v-model.number="no_of_tickets">
        </div>  

        <div class = "submit">
            <router-link to="register/preview"> <button type="submit" > Preview </button> </router-link>  
            <button type="submit" > Submit  </button>
            
            
        </div>
       </form>

  </div>
  </div>
  
</template>

<script>
export default {
    name:"register",
    data(){
        
        return {

             fullname:"",
             mobile:"",
             email:"",
             registration_type:"",
             no_of_tickets:""

        }
    },
    methods:{

        handleFileUpload(event){

            console.log(event.target.value)
        }
    }
}
</script>

<style scoped>

.register-form{

     width:400px;
     margin:20px auto;
     border : 1px solid #eee;
     padding:20px;
     box-shadow: 0 2px 3px #ccc;

  }

 .input{
     margin: 10px auto;
 }

 .input label{

     display: block;
     color: #4e4e4e;
     margin-bottom: 6px;
 }

   .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }


.input.inline label {
    display: inline;
  }
.input.inline input{
    width: auto;
}

.input input:focus{

    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
}

.input select {
    border: 1px solid #ccc;
    font:inherit;
}

.hobbies button{

    border: 1px solid #521751;
    background: #521751;
    color:white;
    padding:6px;
    font:inherit;
    cursor:pointer;
    margin:1px;
}

.hobbies button:hover,
.hobbies button:active{

    background-color: #8d4288;

}

.hobbies input{

    width:90%;
}

.submit {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.submit button{
    border : 1px solid #521751;
    color: #521751;
    padding:10px 20px;
    font:inherit;
    cursor:pointer;
    
    
}


.submit button:hover ,
.submit button:active{
    background-color:#521751;
    color:white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active{

    border : 1px solid #ccc;
    background-color: transparent;
    color:#ccc;
    cursor:not-allowed;
}
  

</style>