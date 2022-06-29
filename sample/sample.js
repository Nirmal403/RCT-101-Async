var arr=['a','b','c','d','e'];
const func =([f,..r])=>r.reduce((a,c)=>a+c)+f
func (arr);