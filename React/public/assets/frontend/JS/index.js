//==================== SIDEBAR ====================
const menuItem = document.querySelectorAll('.menu-item');

//remove active class from all menu item
const removeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
}
//ACTIVE NAV ITEM
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveItem();//before remove
        item.classList.add('active');//after add

        //NOTIFICATION SHOW
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').style.display = 'block';
            //REMOVE NOTIFICATION COUNT
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }

    });
});
//====================================================


//==================== MESSEGES ====================
const messagesNotification = document.querySelector('#messeges-notifications');
const messages = document.querySelector('.messages');
//SEARCH
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');

//SEARCH BAR MESSAGES
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);//search chat


//highlight messages card when messages menu  item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    //REMOVE COUNT
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    //time
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});
//===================================================


//==================== THEME DISPLAY CUSTOMIZATION ====================
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//open modal
const openThemModel = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener('click', openThemModel);

//close modal
const closeThemModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemModel);



/*===== FONT SIZE===== */
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        size.classList.toggle('active');
        let fontSize;

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('---sticky-top-left', '5.4rem');//style.css
            root.style.setProperty('---sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('---sticky-top-left', '5.4rem');
            root.style.setProperty('---sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('---sticky-top-left', '-2rem');
            root.style.setProperty('---sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '18px';
            root.style.setProperty('---sticky-top-left', '-5rem');
            root.style.setProperty('---sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '19px';
            root.style.setProperty('---sticky-top-left', '-12rem');
            root.style.setProperty('---sticky-top-right', '-35rem');
        }
        //change font size of the root html ekement
        document.querySelector('html').style.fontSize = fontSize;
    });
});



/*===== CHANGE ORIMARY COLOR===== */
const colorPlatte = document.querySelectorAll('.choose-color span');
const rootColor = document.querySelector(':root');

//remove active class from all menu item
const removeActive = () => {
    colorPlatte.forEach(item => {
        item.classList.remove('active');
    });
}

colorPlatte.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if (color.classList.contains('color-1')) {
            primaryHue = 252;//style.css
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        removeActive();
        color.classList.add('active');

        rootColor.style.setProperty('--primary-color-hue', primaryHue);
    });
});


/*===== BACKGROUND THEME ===== */
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//Background color from css page
const chageBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    chageBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    chageBG();
});