function quoteGet(){
    fetch("https://api.quotable.io/random").
    then(res => res.json()).
    then(data => {
                    document.getElementById("qote").innerText = (data.content);
                    document.getElementById("author").innerText ="- " + (data.author);
                }
        );
}

document.onload = quoteGet();



