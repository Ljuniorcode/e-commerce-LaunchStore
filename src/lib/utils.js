module.exports = {
    
    date(timestamp){

        const date = new Date(timestamp)

        //ano
        const year = date.getUTCFullYear()
        
        //mes
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        
        //dia
        const day = `0${date.getUTCDate()}`

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`, //iso
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }            
    }
}