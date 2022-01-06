function incLocalStorage(){
    if(!localStorage.getItem('lsCount')){
        localStorage.setItem('lsCount',1);
    }
    else{
        let count = localStorage.getItem('lsCount');
        count++;
        localStorage.setItem('lsCount',count);
    }
    displayValues();
}

function incSessionStorage(){
    if(!sessionStorage.getItem('ssCount')){
        sessionStorage.setItem('ssCount',1);
    }
    else{
        let count = sessionStorage.getItem('ssCount');
        count++;
        sessionStorage.setItem('ssCount',count);
    }
    displayValues();
}

function displayValues(){
    var lsCount = document.getElementById("local-storage-count");
    if(!localStorage.getItem('lsCount')){
        lsCount.innerHTML = `0`;
    }
    else{
        let count = localStorage.getItem('lsCount');
        lsCount.innerHTML = `${count}`;
    }
    
    var ssCount = document.getElementById("session-storage-count");
    if(!sessionStorage.getItem('ssCount')){
        ssCount.innerHTML = `0`;
        console.log(sessionStorage.getItem('ssCount'));
    }
    else{
        let count = sessionStorage.getItem('ssCount');
        console.log(sessionStorage.getItem('ssCount'));
        ssCount.innerHTML = `${count}`;
    }
}