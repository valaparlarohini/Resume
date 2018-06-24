function loadJson(file,callback){
 var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
  callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_skills(data.skills);

});
var div2=document.getElementById("child2");
function fun_career(car){
  var h3=document.createElement("h2");
  h3.textContent="CAREER OBJECTIVE";
  div2.appendChild(h3);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);

  var listItem=document.createElement("li");
  listItem.textContent=car.info;
  list.appendChild(listItem);

  var hr=document.createElement("hr");
  div2.appendChild(hr);
}
  listItem.textContent=edu[i].degree;
function fun_education(edu){
var h1=document.createElement("h2");
h1.textContent="EDUCATIONAL QUALIFICATION";
div2.appendChild(h1);
var hr=document.createElement("hr");
div2.appendChild(hr);
var list=document.createElement("ul");
div2.appendChild(list);
for(var i=0;i<edu.length; i++){
var listItem=document.createElement("li");
listItem.textContent=edu[i].degree;
list.appendChild(listItem);
var listItem1=document.createElement("p");

listItem1.textContent=edu[i].Institute;
list.appendChild(listItem1);
var listItem2=document.createElement("p");

listItem2.textContent=edu[i].data;
list.appendChild(listItem2);


}
}
listItem.innerHTML=ach[i].name;
function fun_achievements(ach){
var h1=document.createElement("h2");
h1.textContent="ACHIEVEMENTS";
div2.appendChild(h1);
var hr=document.createElement("hr");
div2.appendChild(hr);
var list=document.createElement("ul");
div2.appendChild(list);
for(var j=0;j<ach.length; j++){
var listItem=document.createElement("li");
listItem.innerHTML=ach[j].name;
list.appendChild(listItem);

}
}

function fun_skills(tech){
  var h5=document.createElement("h2");
  h5.textContent="TECHNICAL SKILLS";
  div2.appendChild(h5);
  var hr=document.createElement("hr");
  h5.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>"
  }
table.innerHTML=tr;
table.border="1";
}
