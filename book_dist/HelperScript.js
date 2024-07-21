const arrPreacher = document.getElementsByClassName("preacher");
const arrCash = document.getElementsByClassName("txtCash");
const arrDigital = document.getElementsByClassName("txtDigital");
const arrGuestNames = document.getElementsByClassName("txtGuestName");
var totalCash = 0;
var totalDigital = 0;
var totalCollection = 0;
$(document).ready(function(){
    $("#btnSubmit").on("click", ()=>{
        $("#btnSubmit").prop('disabled', true);
        $("#btnSubmit").html("Saving...");
        submitData();
    });
});
 function submitData(){
    let emailBody = getEmailText();
    console.log(emailBody);
    let data = getSheetDataForAPI(emailBody);
    fetch(
        "https://script.google.com/macros/s/AKfycbyJuCp--sI5s5ZucLU0gcAihMa8wjLGaLGmmVaJHwtKaG7GwFNflQ8JjIb3Z91uN-zN/exec",
        {
            method: "POST",
            body: data,
            mode: "no-cors"
        }
    ).then(res => {
        console.log(res.status);
        alert("Data Saved");
        window.location.reload();
    }).catch(err => {
        console.log(err);
        alert("An error has occurred.");
    });
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

 function getSheetDataForAPI(emailData) {
    let formData = new FormData();
    let preacherCashID = "";
    let preacherCash = "";
    let preacherDigitalID = "";
    let preacherDigital = "";
    let date = new Date(document.getElementById("txtDate").value);
    date = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    formData.append("Summary", emailData);
    formData.append("Date", date);
    formData.append("Location", document.getElementById("txtLocation").value);
    formData.append("TotalCollection", totalCollection);
    formData.append("TotalCash", totalCash);
    formData.append("TotalDigital", totalDigital);
    formData.append("AGPCash", arrCash[0].value);
    formData.append("AGPDigital", arrDigital[0].value);
    formData.append("APPCash", arrCash[1].value);
    formData.append("APPDigital", arrDigital[1].value);
    formData.append("DSPCash", arrCash[2].value);
    formData.append("DSPDigital", arrDigital[2].value);
    formData.append("KSSPCash", arrCash[3].value);
    formData.append("KSSPDigital", arrDigital[3].value);
    formData.append("NGPCash", arrCash[4].value);
    formData.append("NGPDigital", arrDigital[4].value);
    formData.append("PHPCash", arrCash[5].value);
    formData.append("PHPDigital", arrDigital[5].value);
    formData.append("SKPCash", arrCash[6].value);
    formData.append("SKPDigital", arrDigital[6].value);
    formData.append("VKPCash", arrCash[7].value);
    formData.append("VKPDigital", arrDigital[7].value);
    formData.append("ViKrPCash", arrCash[8].value);
    formData.append("ViKrPDigital", arrDigital[8].value);
    formData.append("YPPCash", arrCash[9].value);
    formData.append("YPPDigital", arrDigital[9].value);
    formData.append("AvinashPCash", arrCash[10].value);
    formData.append("AvinashPDigital", arrDigital[10].value);
    formData.append("AyushPCash", arrCash[11].value);
    formData.append("AyushPDigital", arrDigital[11].value);
    formData.append("RahulPCash", arrCash[12].value);
    formData.append("RahulPDigital", arrDigital[12].value);
    formData.append("RiteshPCash", arrCash[13].value);
    formData.append("RiteshPDigital", arrDigital[13].value);
    formData.append("RohitPCash", arrCash[14].value);
    formData.append("RohitPDigital", arrDigital[14].value);
    formData.append("SanjeetPCash", arrCash[15].value);
    formData.append("SanjeetPDigital", arrDigital[15].value);
    formData.append("ShivamPCash", arrCash[16].value);
    formData.append("ShivamPDigital", arrDigital[16].value);
    formData.append("VikasPCash", arrCash[17].value);
    formData.append("VikasPDigital", arrDigital[17].value);
    
    formData.append("Guest1Name",arrGuestNames[0].value);
    formData.append("Guest1Cash",arrCash[18].value);
    formData.append("Guest1Digital",arrDigital[18].value);
    formData.append("Guest2Name",arrGuestNames[1].value);
    formData.append("Guest2Cash",arrCash[19].value);
    formData.append("Guest2Digital",arrDigital[19].value);
    formData.append("Guest3Name",arrGuestNames[2].value);
    formData.append("Guest3Cash",arrCash[20].value);
    formData.append("Guest3Digital",arrDigital[20].value);
    formData.append("Guest4Name",arrGuestNames[3].value);
    formData.append("Guest4Cash",arrCash[21].value);
    formData.append("Guest4Digital",arrDigital[21].value);
    formData.append("Guest5Name",arrGuestNames[4].value);
    formData.append("Guest5Cash",arrCash[22].value);
    formData.append("Guest5Digital",arrDigital[22].value);
    formData.append("Guest6Name",arrGuestNames[5].value);
    formData.append("Guest6Cash",arrCash[23].value);
    formData.append("Guest6Digital",arrDigital[23].value);
    formData.append("Guest7Name",arrGuestNames[6].value);
    formData.append("Guest7Cash",arrCash[24].value);
    formData.append("Guest7Digital",arrDigital[24].value);
    formData.append("Guest8Name",arrGuestNames[7].value);
    formData.append("Guest8Cash",arrCash[25].value);
    formData.append("Guest8Digital",arrDigital[25].value);
    formData.append("Guest9Name",arrGuestNames[8].value);
    formData.append("Guest9Cash",arrCash[26].value);
    formData.append("Guest9Digital",arrDigital[26].value);
    formData.append("Guest10Name",arrGuestNames[9].value);
    formData.append("Guest10Cash",arrCash[27].value);
    formData.append("Guest10Digital",arrDigital[27].value);
    formData.append("Guest11Name",arrGuestNames[10].value);
    formData.append("Guest11Cash",arrCash[28].value);
    formData.append("Guest11Digital",arrDigital[28].value);
    formData.append("Guest12Name",arrGuestNames[11].value);
    formData.append("Guest12Cash",arrCash[29].value);
    formData.append("Guest12Digital",arrDigital[29].value);

    /*for(let i=0; i<arrPreacher.length; i++) {
        formData.append("T" + arrCash[i].id.substring(1), arrCash[i].value);
        formData.append("T" + arrDigital[i].id.substring(1), arrDigital[i].value);
    }*/
    return formData;
 }