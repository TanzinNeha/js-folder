//check array using IsArray
const friends=[13,15,18,19,30,39,40];
console.log(Array.isArray(friends));
//finding array element using includes
console.log(friends.includes(18));
//finding array element using index
if(friends.indexOf(13) !== -1){
    console.log('element is there:',true);
} 
else{
    console.log('element is not there:',false);
}
//concat =bring togather
const newFriendsAge=[12,13,14,15];
const allFriends= newFriendsAge.concat(friends);
console.log(allFriends);