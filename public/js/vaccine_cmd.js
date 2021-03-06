//cmd 명령어를 실행해서 curl -o를 통해 test_vaccine.json으로 

const { resolveObjectURL } = require('buffer');

function main() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + date.getMonth();
    let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate(); 
	return new Promise(function(resolve, reject) {
        if(0<= date.getHours() && date.getHours() <= 9) { 
            resolve();
        }

        else {

let exec = require('child_process').exec
// month, date의 경우 10보다 작아지는 경우 앞에 0을 붙여줘야 정상적인 URL 생성이 가능함.


//testor 변수에 담긴 cmd 명령어를 수행
 const service_key = 'ENTER YOUR API KEY'
 var testor = `curl -o public/test_vaccine.json "http://api.odcloud.kr/api/15077756/v1/vaccine-stat?serviceKey=${service_key}&page=1&perPage=10&cond[baseDate::GTE]=${year}-${month}-${day}&cond[sido::EQ]=%EC%A0%84%EA%B5%AD"`

 exec(testor, (err,out,stderr) => { 
	console.log(out);
});
resolve();
}})
}
module.exports = main;