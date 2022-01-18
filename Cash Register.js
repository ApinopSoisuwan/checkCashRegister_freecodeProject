function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
      }
    //console.log(UNIT_AMOUNT['PENNY'] + 9)

    // total cid
    let totalcid = 0
    for (let amount in cid){
        totalcid += cid[amount][1]
    }
    //console.log(totalcid)
    // total cash - price
    let sell = cash - price
    let forsell = cash - price
    console.log(forsell)

    // set rule machie
    let newChange = cid.map(x => [x[0],0] ).reverse()
    let reTrue = []
    //console.log(newChange)
    if (sell > totalcid.toFixed(2)){
        return {status: "INSUFFICIENT_FUNDS", change: []} // first rule
    }else if (sell === totalcid){
        return {status: "CLOSED", change:[...cid]} // sec rule
    }else{ // Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,sorted in highest to lowest order
        let count = 0
        cid = cid.reverse()
        //console.log(cid)
            for (let i = 0;i < cid.length ; i++){
                if (forsell.toFixed(2) >= UNIT_AMOUNT[cid[i][0]] && cid[i][1] >= UNIT_AMOUNT[cid[i][0]] ){ //console.log(UNIT_AMOUNT[cid[i][0]])
                    console.log(forsell.toFixed(2))
                    console.log(cid)
                    forsell -= UNIT_AMOUNT[cid[i][0]]
                    newChange[i][1] += UNIT_AMOUNT[cid[i][0]]
                    cid[i][1] -= UNIT_AMOUNT[cid[i][0]]
                    i = 0                     
            }                           
        }// check process
            if  (forsell > 0){
                //console.log(cid)
                return {status: "INSUFFICIENT_FUNDS", change: []}
            }
        }for (let i in newChange){
            if (newChange[i][1] > 0){
                reTrue.push(newChange[i])
            }
        }return {status: "OPEN", change: [...reTrue]}
    } 

  

  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  // normal 
  //console.log (checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  //should return {status: "INSUFFICIENT_FUNDS", change: []})
  // less cid
  //should return {status: "INSUFFICIENT_FUNDS", change: []}.)
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
  //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.)
  //console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

  /*  Currency Unit	    Amount
    Penny	            $0.01 (PENNY)
    Nickel	            $0.05 (NICKEL)
    Dime	            $0.1 (DIME)
    Quarter	            $0.25 (QUARTER)
    Dollar	            $1 (ONE)
    Five Dollars	    $5 (FIVE)
    Ten Dollars	        $10 (TEN)
    Twenty Dollars	    $20 (TWENTY)
    One-hundred Dollars	$100 (ONE HUNDRED)
*/