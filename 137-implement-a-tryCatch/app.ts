//for implement of try ...catch
let json = `{"name" : "Ali", "age" : 20 }`;
try {let user = JSON.parse(json);
    alert(user.name);
    }catch(err:any){
        alert(`Our page opologised, the data has error !`)
        alert(err.name)
        alert(err.message);
    }