$(document).ready(function () {

    $("form").submit(loanStatus);

});

function loanStatus(event)
{
    event.preventDefault();


    let salary = $("input#salary").val();

    let creditScore = $("input#credit").val();

    let monthsAtJob = $("input#months").val();

    let output;

    if(salary >= 40000)
    {
        if(creditScore >= 600)
        {
            output = "Loan Approved";
        }
        else if(monthsAtJob > 12)
        {
            output = "Loan Approved";
        }
        else
            output = "Loan Denied";
    }
    else if(creditScore >= 600)
    {
        if(monthsAtJob > 12)
        {
            output = "Loan Approved";
        }
        else
            {
            output = "Loan Denied";
            }

    }
    else
        {
        output = "Loan Denied";
        }


    $("h3#output").text(`Your ${output}.`);

}