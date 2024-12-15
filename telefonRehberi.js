const dict = [
    {
        Name: "HANDE",
        Num: 555555,
    },
    {
        Name: "AYLA",
        Num: 222222,
    },
    {
        Name: "EYLÜL",
        Num: 444444,
    }

];
let selection = Number(prompt("Telefon rehberine kişi eklemek için 1'e \n kişi bulmak için 2'ye \n kişi silmek için 3'e basınız."));
if(selection === 1){
    let nameAdd = prompt("Rehbere eklenecek ismi giriniz.").toLocaleUpperCase();
    let num2 = Number(prompt("Eklenecek numarayı giriniz."));
    
    dict.push({Name: nameAdd, Num: num2});
    console.log(dict);

}if(selection === 2){
    let newName = prompt("Lütfen aranacak ismi giriniz.").toLocaleUpperCase();
    for (const di of dict) {
        console.log(di.Name);
        if(di.Name === newName){
            console.log("İsim mevcut");
            
        }else{
            console.log("İsim yok.");
            
        }
    }

}if(selection === 3){
    let deleteName = prompt("Rehberden hangi ismi silmek istersiniz ?").toLocaleUpperCase();
    for (let i = 0; i < dict.length; i++) {
        if(dict[i].Name === deleteName){
            dict.splice(i,1);
        }else{
            console.log("Böyle bir isim rehberde yok.");
            
        }
    }
    let deleteNum = Number(prompt("Rehberden hangi numarayı silmek istersiniz?"));
    for (let j = 0; j < dict.length; j++) {
        if(dict[j].Num === deleteNum){
            dict.splice(j,1);
        }else{
            console.log("Böyle bir numara rehberde yok.");
            
        }
        
    }
    console.log(dict);
    

}