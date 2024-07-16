const arrPreacher = document.getElementsByClassName("preacher");
const arrCash = document.getElementsByClassName("txtCash");
const arrDigital = document.getElementsByClassName("txtDigital");
var totalCash = 0;
var totalDigital = 0;
var totalCollection = 0;
$(document).ready(function(){
    console.log("Hi");
    $("#btnSubmit").on("click", ()=>{
        submitData();
    });
});
 function submitData(){
    console.log("Inside Submit");
    let emailBody = getEmailText();
    console.log(arrCash.length);
    console.log(emailBody);
    let data = getSheetDataForAPI();
    console.log(data);
    //data.append("Name", "Test JS");
    fetch(
        "https://script.google.com/macros/s/AKfycby_K6QS9I3OJ__-s4yOuOZjSWiEeVFR-S5qjTAF7v3EFWKJvaaJXNQ5GaF4s7pnkrsVCQ/exec",
        {
            method: "POST",
            body: data,
            mode: "no-cors"
        }
    ).then(res => {console.log(res);$("#divResponse").html("Testing");});
 }

 function getEmailText() {
    let arrTotal = [];
    let cashValue = 0;
    let digitalValue = 0;
    let totalValue = 0;
    let highestTotal = -1;
    let highestTotalIndex = -1;
    let sortedArr = [];
    let emailText = 
    "Pamho\nSankirtan Report\nDate: " + $("#txtDate").val().slice(0,10).split('-').reverse().join('/') + "\nLocation: " + $("#txtLocation").val() + "\n\n";
    totalCash = 0; totalDigital = 0; totalCollection = 0;

    for(let i=0; i<arrCash.length; i++) {
       //console.log()
       cashValue = (arrCash[i].value=="") ? 0 : Number(arrCash[i].value);
       digitalValue = (arrDigital[i].value=="") ? 0 : Number(arrDigital[i].value);
       totalValue = cashValue + digitalValue;
       arrTotal.push({preacher: arrPreacher[i].textContent, total: totalValue});
       totalCash += cashValue;
       totalDigital += digitalValue;
       totalCollection += totalValue;
    };

    for(let i=0; i<arrTotal.length; i++) {
        highestTotal = arrTotal[0].total;
        highestTotalIndex = 0;
        for(let j=1; j<arrTotal.length; j++) {
            if(arrTotal[j].total > highestTotal) {
                highestTotalIndex = j;
                highestTotal = arrTotal[j].total;
            }
        }
        sortedArr.push(
            {
                preacher: arrTotal[highestTotalIndex].preacher,
                total: arrTotal[highestTotalIndex].total
            }
        );
        arrTotal[highestTotalIndex].total = -1;
    }

    for(let i=0; i<sortedArr.length; i++) {
        if(sortedArr[i].total > 0) emailText += sortedArr[i].preacher + " - " + sortedArr[i].total + "\n";
        else break;
    }

    emailText += "\nCash - " + totalCash + "\nDigital - " + totalDigital + "\nTotal: " + totalCollection;
    return emailText;
 }

 function getSheetDataForAPI() {
    let formData = new FormData();
    let preacherCashID = "";
    let preacherCash = "";
    let preacherDigitalID = "";
    let preacherDigital = "";
    let date = new Date(document.getElementById("txtDate").value);
    date = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    formData.append("Date", date);
    formData.append("Location", document.getElementById("txtLocation").value);
    formData.append("TotalCollection", totalCollection);
    formData.append("TotalCash", totalCash);
    formData.append("TotalDigital", totalDigital);
    formData.append("AGPCash", arrCash[0].value);
    formData.append("AGPDigital", arrDigital[0].value);
    formData.append("AvinashPCash", arrCash[1].value);
    formData.append("AvinashPDigital", arrDigital[1].value);
    formData.append("DSPCash", arrCash[2].value);
    formData.append("DSPDigital", arrDigital[2].value);
    formData.append("DevanshuPCash", arrCash[3].value);
    formData.append("DevanshuPDigital", arrDigital[3].value);
    formData.append("MDPCash", arrCash[4].value);
    formData.append("MDPDigital", arrDigital[4].value);
    formData.append("PankajPCash", arrCash[6].value);
    formData.append("PankajPDigital", arrDigital[6].value);
    formData.append("PHPCash", arrCash[7].value);
    formData.append("PHPDigital", arrDigital[7].value);
    formData.append("RahulPCash", arrCash[8].value);
    formData.append("RahulPDigital", arrDigital[8].value);
    formData.append("SDPCash", arrCash[10].value);
    formData.append("SDPDigital", arrDigital[10].value);
    formData.append("SKPCash", arrCash[11].value);
    formData.append("SKPDigital", arrDigital[11].value);
    formData.append("SunilPCash", arrCash[12].value);
    formData.append("SunilPDigital", arrDigital[12].value);
    formData.append("VikasPCash", arrCash[13].value);
    formData.append("VikasPDigital", arrDigital[13].value);
    formData.append("MohitPCash", arrCash[5].value);
    formData.append("MohitPDigital", arrDigital[5].value);
    formData.append("RohitPCash", arrCash[9].value);
    formData.append("RohitPDigital", arrDigital[9].value);
    formData.append("Guest1Cash",arrCash[14].value);
    formData.append("Guest1Digital",arrDigital[14].value);
    formData.append("Guest2Cash",arrCash[15].value);
    formData.append("Guest2Digital",arrDigital[15].value);
    formData.append("Guest3Cash",arrCash[16].value);
    formData.append("Guest3Digital",arrDigital[16].value);
    formData.append("Guest4Cash",arrCash[17].value);
    formData.append("Guest4Digital",arrDigital[17].value);
    formData.append("Guest5Cash",arrCash[18].value);
    formData.append("Guest5Digital",arrDigital[18].value);
    formData.append("Guest6Cash",arrCash[19].value);
    formData.append("Guest6Digital",arrDigital[19].value);
    formData.append("Guest7Cash",arrCash[20].value);
    formData.append("Guest7Digital",arrDigital[20].value);
    formData.append("Guest8Cash",arrCash[21].value);
    formData.append("Guest8Digital",arrDigital[21].value);
    formData.append("Guest9Cash",arrCash[22].value);
    formData.append("Guest9Digital",arrDigital[22].value);
    formData.append("Guest10Cash",arrCash[23].value);
    formData.append("Guest10Digital",arrDigital[23].value);
    formData.append("Guest11Cash",arrCash[24].value);
    formData.append("Guest11Digital",arrDigital[24].value);
    formData.append("Guest12Cash",arrCash[25].value);
    formData.append("Guest12Digital",arrDigital[25].value);
    formData.append("Guest13Cash",arrCash[26].value);
    formData.append("Guest13Digital",arrDigital[26].value);
    formData.append("Guest14Cash",arrCash[27].value);
    formData.append("Guest14Digital",arrDigital[27].value);
    formData.append("Guest15Cash",arrCash[28].value);
    formData.append("Guest15Digital",arrDigital[28].value);
    formData.append("Guest16Cash",arrCash[29].value);
    formData.append("Guest16Digital",arrDigital[29].value);
    formData.append("Guest17Cash",arrCash[30].value);
    formData.append("Guest17Digital",arrDigital[30].value);
    formData.append("Guest18Cash",arrCash[31].value);
    formData.append("Guest18Digital",arrDigital[31].value);
    formData.append("Guest19Cash",arrCash[32].value);
    formData.append("Guest19Digital",arrDigital[32].value);
    formData.append("Guest20Cash",arrCash[33].value);
    formData.append("Guest20Digital",arrDigital[33].value);

    /*for(let i=0; i<arrPreacher.length; i++) {
        formData.append("T" + arrCash[i].id.substring(1), arrCash[i].value);
        formData.append("T" + arrDigital[i].id.substring(1), arrDigital[i].value);
    }*/
    return formData;
 }