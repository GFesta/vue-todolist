
var todoApp = new Vue ({
  el:'#app',
  data: {
    items:"", // input inserito dall'utente
    todoElements:[], // dati inseriti e mostrati tramite lista
    selectedElements: [], // elementi contrassegnati come completati
    isActive:false,
  },
  methods: {
    pushTask: function () { // inserisce l'elemento nella to-do list
      while (this.items != "") {
        this.todoElements.push(this.items);
        this.items ="";
        this.isActive = false;
      }
    },
    removeTask: function (index) { // elimina l'elemento dalla to-do list
      this.todoElements.splice(index, 1);
      this.selectedElements.splice(index, 1);
    },
    toggleTask: function(e) { // controlla se un elemento è presente nella lista e lo evidenzia a quello uguale.
      if (this.selectedElements.includes(e)) {
        this.selectedElements = this.selectedElements.filter(
          (item) => item !== e
        );
      } else {
        this.selectedElements.push(e);
      }
    },
  }
})