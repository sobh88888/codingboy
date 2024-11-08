// function add(a,b){
//     s=a+b;
//     return s;
// }
// let n=add("sobh",99);
// document.write(n);
// function mul(l,c){
//     return l*c;
// }
// let nn=mul(90,99);
// document.write(nn);
// let g=(l,v)=>{
//     console.log(l+v)
// }
// console.log(g)

// let mull=(t,f)=>{
//     console.log(t*f);
// }
// function mul(f,g){
//     return f*g;
// }
// let v=mull(9,8);
// console.log(v)
// const vow = (str) => {
//     let count = 0;
//     for(const c of str){
//         if(c==="a" ||c==="e"||c==="i"||c==="o"||c==="u"){
//             count++;
//         }
       
//     }
//    console.log(count);
// };
// let arr=[10,20,30]
// arr.forEach(function(val){
//     d=val*val;
//     console.log(d);
// });
// n=1;
// do{
//     console.log(n);
//     n++;
// }while(n<5)
// let str="sobh";
// for(let val of str){
//     if(val==="s"||val==="o"){
//         console.log("good")
//     }
// }
// let student={
//     name:"sobh",
//     roll:56,
//     pass:true,
// };
// for(let key in student){
//     console.log("key="+key +" value is="+student[key])
// }
// let n=100;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//     console.log(i)
// }
// }
// let gameno=25;

// let n=5;
// for(let i=0;i<=5;i++){
    
//     let ch=parseInt(prompt("choose right no"));
//     if(gameno===ch){
//         document.write("match")
//     }
    // else{
    //     document.write("not match")
    // }
// }
// let gn=125;
// let un=parseInt(prompt("choose right no"));
// while(un !== gn){
//     un=parseInt(prompt(" wrong choice renter no"));
// }
// console.log("congrats")
// let c="sobh"
// console.log(`the main toka is${c}ama toka se ${c}`)
// let str="sobh"
// let strr=str.toUpperCase();
// console.log(strr)
// let p=str.length;
// console.log(p)
// // let s=str.toLowerCase(); 
// console.log(str.toLowerCase())
// let sobh="priyanka"
// let ss=sobh.slice(2,7)
// console.log(ss)
// let sss=str.concat(sobh)
// console.log(sss)
// let str='soubhagya'
// let s=str.replace("ou","bi");
// console.log(str.charAt(0))
// console.log(str)
// console.log(str.charCodeAt(5))
// console.log(str.startsWith("so",0))
// console.log(str.startsWith("oubh",1))
// console.log(str.endsWith("bha",6))
// console.log(String.fromCharCode(97))
// console.log(str.includes("ya"))
// console.log(str.lastIndexOf("gya"))
// console.log(str.substn(1,4))
// console.log(str.padStart(20,"u"))
// console.log(str.repeat(3))
// console.log(str.search("a"))
// let c=10;
// let s=c.toString();
// console.log(typeof s)
// sou

// if(st>6){
// //     console.log(str.padEnd(6,"."))
// let p=str.slice(0,6);
// console.log(p)
//     // console.log(p+"....")
    
    
// }
// else
// {
//     console.log(str);
// }
// let str=prompt("enter a name")
// let p="@"
// let s=str.length;
// let res=p+str+s;
// // document.write(res)
// var mark=[85,97,44,37,76,60]
// // for(let y of mark){
// //     console.log(y)
// // }
// let sum=0
// for(i=0;i<mark.length;i++){
//     console.log(mark[i])
//     sum=sum+mark[i];
    
// }
// for(let a of mark){
//     sum=sum+a;
// }
// console.log(sum)
// console.log("sum is"+sum)
// let avg=sum/mark.length
// console.log("avg is"+avg)
// for (let t in mark){
//     console.log(t)
// }
// mark[1]=30;
// console.log(mark[1])
// console.log(mark)
// console.log(mark.length)
//  var mark=10;
// console.log(mark)
// let str = "rohan"
// console.log(str[4])
// let s={
//     name:"sobh",
//     nno:10
// };
// for (let u in s){
//     console.log(u+""+s)
// }
// console.log(s.name)
// let r=new Object();
// r.namee="sobh"
// console.log(r.namee)
// let arr=[250,545,300,900,50]
// for(let off of arr){
//     let fin=off*10/100;
//     let aft=off-fin;
//     console.log(off+" after 10% disc price is"+aft)
// }
// let obj={
//     id:10,
//     name:"sobh"
// }
// Object.seal(obj)
// obj.name="proooo"
// obj.clg="gim"
// console.log(obj["id"])
// // console.log(objb )
// console.log(Object.isSealed(obj))
// console.log(Object.isFrozen(obj))

//08/08/24
// d
// for(let y=0;y<ary.length;y++){
//     console.log(ary[y])
// }
//  let arr=[{name:"sobh",id:45},{name:"gim",id:12},{name:"suman",id:3}]
//  console.log(arr[2].name);
//  for (let y of ary){
//     console.log(y)
//  }
//  console.log(ary.at(2))
//  let arr2=[12,123,12341,345]
//  console.log(ary.concat(arr2));
// ary.copyWithin(3,1,4)
// console.log(ary)
// let res="soubhagya"
// console.log(res.endsWith("oub",4));
// ary.fill("*",2,5)
// console.log(ary)
// let arr=ary.filter(data)
// function data(a){
// return a>30;

// }
//     console.log(arr);
// let arr1=ary.filter((a)=>{
//     return a<30;
// })
// console.log(arr1)
// let arr2=ary.find((a)=>{
//     return a==30;
// })
// console.log(arr2);

// let arr3=ary.findIndex((a)=>{
//     return a<5;
// })
// console.log(arr3);
// let arr4=ary.findLastIndex((a)=>{
//     return a>50
// })
// console.log(arr4);
// let arr5=ary.findLast((a)=>
// {
//     return a<56;
// })
// console.log(arr5)
// let ary=[12,23,34[12,45,4,[19,765,[76,56,45],23,98,89],"ghh","gh"]"as",]
// let arr=ary.flat(1)
// console.log(arr)
// let y=ary.flatMap((a)=>{
//     return a*2;
    
// })
// console.log(y)
// ary.forEach((a)=>{
//     console.log(a*a)
// })
// let str="jhgfdghjjgjhg"
// let ss=Array.from("jhgfgdhjgdzgfzdsfuytrertyuytrewertyuytrewe")
// console.log(ss)
// let ary=[12,14,15,19,17,23,24,78,2,56,57]
// let arr=ary.some((a)=>{
//     return a ==2
// })
// // for (let data of arr){
// //     console.log(data)
// // }
// console.log(arr);
let id1=parseInt(prompt("enter id"))
let arr=[{id:1,name:"sobh"}
    {id:2,name:"padi"}
    {id:3,name:"simi"}
]
