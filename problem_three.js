function saveThePrisoner(n, m, s) {
    let position = s;
    for(let i = 0; i<m; i++) {
        
        if (position > n) {
            position = 1;
        }
        position++;
    }
    
    return position - 1;

}
