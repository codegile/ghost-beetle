module.exports =  function() {
    console.log('>>> Extenstion activated');
    ghost.helpers.register('my_helper', function(){
        return '<h1>Hello WOLRD!</h1>';
    });
}();