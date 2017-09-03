Meteor.methods({
    adiciona: function(obj){
        console.log("Inserção - " + this.userId);
        console.log({nome: obj.nome, data: new Date(), usuario: this.userId});
        Tarefas.insert({nome: obj.nome, data: new Date(), usuario: this.userId});
    },

    remove: function(id){
        Tarefas.remove({_id: id, usuario: this.userId});
    }
})