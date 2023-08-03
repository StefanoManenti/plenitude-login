class Obj {  
    
    merge(obj1, obj2){
		let obj3 = {};
		let attrname = '';
		for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}

	join(object, separator){
		let r = '';
		for (let property in object) {
			if ( r !== '' ){
				r += separator;
			}
			r += property+'='+object[property];
		}
		return r;
	}

}

export default new Obj();