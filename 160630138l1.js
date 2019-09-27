document.title=document.title.substr(document.title.indexOf(' - ')+3);


var isInner = false;

function updateValidTime(){
	var uuid = cook.get("redisId","");
	var name = cook.get("CERP_LESSASS_C","");
	var mail = cook.get("CERP_LESSASS_F","");
	if(uuid.length>0){
		cook.set("redisId",uuid,1/3);//neea.setCook("UUID",uuid,1/3);
		if(name.length>0)
			cook.set("CERP_LESSASS_C",name,1/3);
		if(mail.length>0)
			cook.set("CERP_LESSASS_F",mail,1/3);
	}
}
updateValidTime();