let res = document.getElementById('result');

function solve(val) {
  res.value += val;
}

function Result() {
   try{
      let x = eval(res.value);
      res.value = x;
   } catch(error){
      res.value = "Error";
   }
 
}

function allclr() {
  res.value = "";
}

function Delete() {
  res.value = res.value.slice(0, -1);
}

