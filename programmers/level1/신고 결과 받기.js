function solution(id_list, report, k) {
    var answerObj = [];
    let resultArry = [];
    let result = Array(id_list.length).fill(0);
    
    // 중복신고 제외 
    let deDuplicationReport = array => [...new Set(array)];
    deDuplicationReport = deDuplicationReport(report)
    
    
    // reportEl.split(" ")[0] : 신고한사람 id
    // reportEl.split(" ")[1] : 신고받은사람 id 
    
    for(let $id of id_list){
        for(let reportEl of deDuplicationReport){
            let $reportedPerson = reportEl.split(" ")[1];
            let $reportPerson =  reportEl.split(" ")[0];
            if($id === $reportedPerson){
                answerObj.push({
                    reportPerson : $reportPerson ,
                    reportedPerson: $reportedPerson
                })
            }
        }
    }
    
    // resultArray : 신고당한 개수 배열 
    for(let $id of id_list){
        let chkCount = 0
        for(key in answerObj){
            if($id === answerObj[key].reportedPerson){
                chkCount++   
            }     
        }
        resultArry.push(chkCount)
    }    
    
    // 신고당한 개수 배열을 통해 k 보다 많은 사람을 걸러냄 
    for(let $id_list_index=0 ; $id_list_index < resultArry.length ;   $id_list_index ++){    
        if(resultArry[$id_list_index] >= k){
            for(key in answerObj){
                if( answerObj[key].reportedPerson === id_list[$id_list_index] ){
                    result[id_list.indexOf(answerObj[key].reportPerson)] += 1 
                }
            }
        }
    }
    return result;
}