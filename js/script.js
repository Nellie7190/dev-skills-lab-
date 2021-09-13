
let $input;
//create button 
const addSkillBtn = document.getElementById('skill-button');

$(addSkillBtn).on('click', function() {
    //button grabs input from user
    let $input = $('#input-skill').val();   
    //post user input to li element & update skills list
    $('ul').append(`<li> <button class='x'>X</button>  ${$input} </li>`);
    //clear input field
    $('#input-skill').val('')
    //remove skill from list
    $('.x').on('click', function(evt) {
        $(this).closest('li').remove();
    });
})

