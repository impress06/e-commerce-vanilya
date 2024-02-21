
new Glide(".glide",{
    type: 'carousel',
    startAt:0,
    perView: 4,
    autoplay:3000,
    breakpoints:{
        992:{
            perView:3

        },
        768:{
            perView:2
        },
        576:{
            perView:1
        }
    }
    

}).mount()