window.addEventListener('DOMContentLoaded', function() {// это событие срабатывает тогда, когда польностью загрузилась вся dom структура(все теги и т.д.)На картинки все равно. 

    'use strict';

// Блок content
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { 
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');// эти 2 класса есть в css файле, посмотри
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); // 1 потому что скрываем все элементы кроме нулевого 

    function showTabContent(b) {
        if( tabContent[b].classList.contains('hide')) {
            
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target; // сокращаем код

        if(target && target.classList.contains('info-header-tab')) {
            for(let i=0; i < tab.length; i++) {
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

}); 

