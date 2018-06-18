var floor7=["TS1*TS107","TS201.6*TS275.54","TS666*TS881",
"TS934.3*TS935.521","TS941.11*TS941.15","TS941.2*TS941.26",
"TS941.5*TS941.631","TS941.7*TS941.718","TS941.763*TS941.763.1",
"TS951*TS971.2","TS972.164*TS973.5","TS974.1*TS974.11","TS976.15*TU",
"TS107*TS201.6","TS275.5*TS65.9-64","TS881*TS934.3","TS935.521*TS941.11",
"TS941.15*TS941.2","TS941.26*TS941.5","TS941.631*TS941.7",
"TS941.718*TS941.763","TS941.763*TS951","TS971.2*TS972.164",
"TS973.5*TS974.1","TS974.11*TS976.15","TS976.9*TU","TU*TU-53",
"TU-881*TU2","TU2201.4*TU204-39","TU22*TU238.2-39","TU241-64*TU241.1",
"TU3*TU391.04","TU7*TU723.1","TU723.3-39*TU769-64","TU984*TU986.2",
"J*J05","J06*J061","J110.9*J121","J205.2*J212","TU-53*TU-88",
"TU2*TU201","TU204-39*TU22","TU238.2-39*TU241-64","TU241.1*TU3",
"TU391.04*TU7","TU723.1*TU723.3-39","TU769-64*TU984","TU986.2*TU989.9",
"J05*J06","J061*J110.9","J121*J205.2","J212*J212.25"			
]
var regnum=/\D*/;
var regchar=/[^a-z]/ig;
var t="TU723.3-39".replace(regnum,"");
function findbest(a,b,c){
	if (a.replace(regchar,"")==b.replace(regchar,"") && 
	b.replace(regchar,"")==c.replace(regchar,"")) {
		if (b.replace(regnum,"")>=a.replace(regnum,"") && 
		b.replace(regnum,"")<=c.replace(regnum,"")) {
			return true;
		}else{
            return false;  
		}
	}
}
function compare(str,arr) {
	for (let i = 0; i < arr.length; i++) {
		var newarr=arr[i].split("*");
		if (findbest(newarr[0],str,newarr[1])) {
			return i;
			break;
		}
	}
}
res=compare("TS65.9-63",floor7);
console.log(floor7[res]);