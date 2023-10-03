function isJavaScriptFile(searchString){
    if( typeof searchString != 'string'){
        return 'Please enter a string';
    }
const fileName = '.js';
const fileLowerCase = fileName.toLowerCase();
const doesExit = fileLowerCase.endsWith(searchString.toLowerCase());
//console.log(doesExit);
return doesExit;
}
console.log(isJavaScriptFile('png.Js'));
