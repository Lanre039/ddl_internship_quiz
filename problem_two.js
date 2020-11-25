function staircase(n) {
    let count = 1;
    while(count < n + 1) {
        const store = new Array(n).fill(' ');
        store.splice(-count);
        const fills = new Array(count).fill('#');
        store.push(...fills);
        const print = store.join('');
        
        console.log(print)
        count++;

    }
}
