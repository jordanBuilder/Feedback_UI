//We  just get all the html element with the class rating in the variable ratingEls by the function querySelectorAll()
const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container"); 
let selectedRating = "";

//And now we gonna loop through all these html elements we just get, by a foreach loop.

//the foreach in JS looks like the php one a little bit. here, we use too a another variable name  to loop each line or element of the "array": ratingEls, which is ratingEl. 
ratingEls.forEach((ratingEl) =>
{
    ratingEl.addEventListener("click",(event) =>{
        /*when we click the emojis we dont get anything so we need to get the parent
        The parent here is div around the emojis

        so we say : if the event.target.innerText is empty then console.log the event.target.parentNode.innerText
        */
       removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;

    console.log(event.target.innerText || event.target.parentNode.innerText);
    
    event.target.classList.add('active');
    event.target.parentNode.classList.add("active");

    })
})

function removeActive()
{
    ratingEls.forEach((ratingEl) =>
    {
        ratingEl.classList.remove('active');
    })
}

btnEl.addEventListener("click", () =>
{
    if(selectedRating !== "")
    {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
        <p>We'll use your feedback to improve our customer support. </p>
        `;
    }
})
