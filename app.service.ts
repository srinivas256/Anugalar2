import{ Injectable} from '@angular/core';

@Injectable()


export class userService{

 public usersList:Array<{name:string, password:string}> =[{name:"srinivas", password:"panuganti"},
          {name:"sri",password:"hi"}]

    getUsers(name:string, pwd:string){
           
     for(let i=0; i<this.usersList.length;i++){
             
            if( name == this.usersList[i].name && pwd == this.usersList[i].password){
                        // console.log("welcome"+name);
                        return true;
            }

            else{
                 //console.log("Please register");
                 return false;

            }
   }
   }
  
  


}