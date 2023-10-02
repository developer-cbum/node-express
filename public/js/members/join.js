console.log('연결됌');

let joinController = {
    param : {},
    $target : null,
    init : function(target){
        this.$target = target
        this.commonEvent()
    },
    commonEvent : function (){
        

    },
}

(function{

    const $target = $('#join-section');

    joinController.init($target)

})()