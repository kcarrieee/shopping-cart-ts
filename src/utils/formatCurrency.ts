const FORMATTER = new Intl.NumberFormat(undefined,{
    currency:"USD", style:"currency"
})

export function formatCurrency(price: number){
    return FORMATTER.format(price)
}