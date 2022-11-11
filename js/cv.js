let url ="./data.json"
const eduList = document.getElementById("myEducation");
const workList = document.getElementById("myWork");




async function getSomething(){

    let response = await fetch("./data.json");
    
   


    if (response.ok){

        let data = await response.json();
        console.log(data);
        
        var type = document.getElementById("myData");
        




        data[0].education.forEach(element => {

            let listA = document.createElement('h2')
            let listB = document.createElement('h5')
            let listC = document.createElement('h2')
            let listD = document.createElement('p')
            listA.innerHTML= element.title
            listB.innerHTML= element.period
            listC.innerHTML= element.organizer
            listD.innerHTML= element.description
            if( response.ok)
                
                eduList.appendChild(listB)
                eduList.appendChild(listA)
                eduList.appendChild(listC)
                eduList.appendChild(listD)
            

            console.log(element)
        });



       
       
       
       
       
        data[1].work.forEach(element => {
            let listH = document.createElement('h5')
            let listI = document.createElement('h2')
            let listG = document.createElement('h2')
            let listD = document.createElement('p')
            listI.innerHTML= element.title
            listH.innerHTML= element.period
            listG.innerHTML= element.organizer
            listD.innerHTML= element.description
            
            if( response.ok)
                
                workList.appendChild(listH)
                workList.appendChild(listI)
                workList.appendChild(listG)
                workList.appendChild(listD)
            

            console.log(element)
        });

            


       
       
        
       



     



        //hämta vald data
        // Lägg till i DOM:en efter preferenser

        
       


}

else{

    console.log("HTTP-Error:"+ response.status);



}



}

console.log("first");

getSomething();
console.log("second");





