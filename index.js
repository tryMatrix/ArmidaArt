var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "200px";
    
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0.1px")
            {
                MenuItems.style.maxHeight = "200px";
            }
        else if(MenuItems.style.Height == "20px")
            {
                MenuItems.style.maxHeight = "20px";
            }
        else
            {
                MenuItems.style.maxHeight = "0px";
            }
}

function message() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (Name.value === '' || email.value === '' || msg.value === '') {
        danger.style.display = 'none';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}