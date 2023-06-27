function closure(index) {
    let out = '(()=>'
    for (let c = index; c > 0; c--) out += '()=>'
    out += '{})()'
    for (let c = index; c > 0; c--) out += '()'
    return out
}
console.log(closure(69+420));
