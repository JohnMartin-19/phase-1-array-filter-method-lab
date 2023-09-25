// Code your solution here
//const array = ['John','Peter','Mark','Ian','21','James','June','Pato']

function findingMatch(array){
    newArr = []
    for (const name of array){
        if(name[0] === 'J'){
            newArr.push(name);
            console.log(newArr)
        }
    }
}
findingMatch(['John','Peter','Mark','Ian','21','James','June','Pato']
);
['John','Peter','Mark','Ian','21','James','June','Pato'].filter(function(findingMatch){
    console.log(newArr)
});

function fuzzyMatch(array){
    List = []
    for (const name of array){
        if(name[0] === 'P' && name[1] === 'e'){
            List.push(name);
            console.log(List)
        }
    }
}
fuzzyMatch(['PEter','Peter','Pelistro','peterson','Pearl','Pauline','Penchester']
);

['PEter','Peter','Pelistro','peterson','Pearl','Pauline','Penchester'].filter(function(fuzzyMatch){
   console.log(List)
});



const drivers = [
 {
    name:'Peter',
    home:'Gilgil',
},
{
    name:'Ian',
    home:'Nairobi'
},
{
    name:'Zac',
    home:'Gilgil'
},
{
    name:'Mark',
    home:'Nakuru'
},
{
    name:'Joy',
    home:'Gilgil'
},
{
    name:'Addy',
    home:'Aberdare'
},
]
function matchName(obj,hm){
    ls = [];
    for(const driver of obj){
        if(driver.home === hm){
            ls.push(driver);
            console.log(driver)
        }
    }
}
matchName(drivers,'Gilgil')