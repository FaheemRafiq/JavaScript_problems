export function isPangram(string){
    let str = string.toLowerCase();
    return 'abcdefghijklmnoprstuvwxyz'.split('').every(x =>{
        return str.indexOf(x) != -1;
    })
}