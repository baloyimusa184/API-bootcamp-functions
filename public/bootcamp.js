document.addEventListener("alpine:init", ()=>{
    Alpine.data('bootcampFunctions', ()=> {
        return{
            sentence: '',
        typedSentence: '',

        type: '',
        billTotal: 0,
        enteredPrice: '',
        typedBill: '',
        amount: '',

        phonebill: 0,
        enteredBill: '',

        TotalDff: '',
        usageEntry: '',
        usage: '',
        amountEntered: '',
        airtime: '',
        airtimeCalc(){
            axios.get(`/api/enough?usage=${this.usage}&available=${this.airtime}`)
            .then(result => {
                console.log(result.data)
                this.TotalDff = result.data.result
            })
        },
        totalPhonebill(){
            axios.get(`/api/phonebill/prices?type=${this.type}&price=${this.amount}`)
            .then(result => {
                console.log(result.data)
                //this.billTotal = result.data.bill
            })
        },
        calcBill(){
            axios.get(`/api/phonebill/total?bill=${this.phonebill}`)
            .then(result => {
                console.log(result.data)
                this.billTotal = result.data.bill
            })
        },
        game(){
            axios.get(`/api/word_game?sentence=${this.sentence}`)
            .then(result => {
                console.log(result.data.longestWord)
                this.sentence = result.data
            })
        },
        
        }
    });
});