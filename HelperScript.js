$(document).ready(function(){
    console.log("Hi");
    let data = new FormData();
    data.append("Name", "Test JS");
    fetch(
        "https://script.google.com/macros/s/AKfycbw2yEKBlAz1pIk28mt5EwJJ3fiGbYgomsT8ZE9Y9vUTi5lM1TdsPNbyzR5aWNplXaln/exec",
        {
            method: "POST",
            body: data,
            mode: "no-cors"
        }
    ).then(res => console.log(res));
});