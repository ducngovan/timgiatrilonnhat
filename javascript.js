let x=[-3,5,2,3,2,1,10];
let max=x[0];
let index=0;
for(let i=1;i<x.length;i++){
    if(x[i]>max){
        max=x[i];
        index=i
    }
}alert('max '+max+'tai vi tri thu '+index)