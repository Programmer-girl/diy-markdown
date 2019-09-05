const remarkable = (a) => {
    // var arr = a.split('<br>'|'↵');
    // console.log(arr,arr.indexOf(3)>0);
    console.log('==',a,a.indexOf('/n')>0)
    if(a.indexOf('/n')>0){
        console.log('有/n')
    }
    return a;
}

export default remarkable