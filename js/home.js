let height = 500;
let width = 800;

let slideItem = 4;
let sliderItemsWidth = width*slideItem;

$('#slider').css({
    height: height + 'px',
    width: width + 'px',
    overflow: 'hidden',
});

$('#slider-items').css({
    width: sliderItemsWidth + 'px',
    height: height + 'px',
    display: 'flex',
    position: 'relative',
})

$('.slider-img').css({
    height: height + 'px',
    width: width + 'px',
})

let index=0;

let slide = function(change){
    index += change;
    if(index<0) index = 3;
    else if(index>3) index = 0;

    $('#slider-items').animate(
        {
            left: -width * index,
        },
        400
    );
}

$('#laquobtn').click(function(){
    slide(-1);
});

$('#raquobtn').click(function(){
    slide(1);
});