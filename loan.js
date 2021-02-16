$(document).ready(function () {

    $("form").submit(loanStatus);

});

function loanStatus(event)
{
    event.preventDefault();
    //Get Salary from user
    let salary = $("input#salary").val();

    //Get Credit Score from user
    let creditScore = $("input#credit").val();

    //Get Months from user
    let monthsAtJob = $("input#months").val();

    //Declare an output variable
    let output;


    //Check the condition
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

    //Print the output in h3 tag with #output ID
    $("h3#output").text(`Your ${output}.`);
}