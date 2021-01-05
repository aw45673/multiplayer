class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("MultiPlayer")
        title.position(150,0)

        var input= createInput("Name")
        var button= createButton("Join")
        var greeting= createElement('h3')

        input.position(150,150)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name= input.value() 
            playerCount+=1
            player.updateCount(playerCount)
            player.update(name)
            greeting.html("Welcome "+ name)
            greeting.position(130,160)
        })
    }
}