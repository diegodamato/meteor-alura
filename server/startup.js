Meteor.startup(function(){

    Meteor.publish("tarefas", function() {
        console.log("Consulta - " + this.userId);
        console.log({ usuario: this.userId });
        return Tarefas.find({ usuario: this.userId });
    });

});