function status(){

    return true;
}

function order(){
let new_order=document.getElementById("order").value;
    let my_order= new Promise(function(resolve, reject){
      let s=status();

      let time=Math.random()*10000;
      console.log(time);

      setTimeout(function(){
     
        if(s){
            resolve("food");
        }
        else{
            reject("Sorry We can't take your food request")
        }
      },time);
    })

    my_order.then(function(food){
        console.log(`Your ${food} is ready`)
    });
    
    my_order.catch(function(notaccept){
        console.log(` ${notaccept} `)
    })
   

}