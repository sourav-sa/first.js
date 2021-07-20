
//functio of converting kilometer to meter
function kilometerToMeter(n){
    if(n<0){
        
    }
    meter=n*1000;
    return meter;
}

//function of budget calculator
function budgetCalculator(watch,phone,laptop){
     var budget1= watch*50;
     var budget2= phone*100;
     var budget3=laptop*500;
     var totalBudget=budget1+budget2+budget3;
     return totalBudget;
}


//function of hotelcost calculator
function hotelCost(days){
    if(days<=0){
        var cost=0;
        console.log("Hey,You haven't stayed at our hotel yet.Our hotel is the best! Please consider staying here next time you visit.have great time!");
    }
    else if(days<=10){
        var cost=days*100;
    }
    else if(days<=20){
       var cost=1000+(80*(days-10));
    }
    else{
        var cost=1800+(50*(days-20));
    }
    return cost;
}


//function of megaFriend
var frndsarray=["sourav","rifat","ami","sandy saha"];
function megaFriend(frndsarray){
        var max = frndsarray[0].length ; 
        var maxindex=0;
        
        for(i=0; i<frndsarray.length; i++){
                var element = frndsarray[i].length;
                if(element>max){
                        maxindex=i;
                        max=element;
                }
              
        }
    
return  frndsarray[maxindex];

}
console.log(megaFriend(frndsarray));
