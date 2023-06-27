(()=>{return()=>{return()=>{}}})()()()
function closure(index) {
    let out = '()=>{'
    if (index <= 0) return out + '}'
    return 'return' + closure(--index) + out + '}'
}
