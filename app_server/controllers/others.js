/*About Page*/
module.exports.about = function(req,res,next){
    res.render('generic-text', {
        title:'About',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget turpis tempus, consectetur leo quis, tempor eros. Vestibulum nunc nulla, porttitor nec velit nec, fermentum suscipit arcu. Praesent varius turpis neque, in commodo lorem dictum in. Cras mollis accumsan felis, ac tincidunt purus tempor mollis. Donec sed lectus imperdiet, lacinia ex sit amet, consectetur diam. \n Proin sit amet lacus interdum, ultricies tortor ac, luctus nisl. Praesent et diam finibus, porta nulla congue, malesuada mauris. Vivamus efficitur massa blandit, rutrum velit et, dignissim nulla. Cras neque arcu, ullamcorper sit amet neque ut, sollicitudin ornare quam. Quisque laoreet ullamcorper faucibus. Cras ultricies rutrum mauris, a pulvinar ex. Donec feugiat pretium lectus convallis feugiat. Aenean gravida dui sed metus vulputate congue.'
    });
};
