Template.dashboard.helpers({
})

Template.trainingsMaintenanceTable.helpers({
  trainingsCollection: () => {
    return Trainings.find({})
  },
  trainingTableSettings: () => {
    return {
      fields: [
        {
            key: 'title',
            label: 'Título',
            fn: function(value,object){
              if(!value){
                return '';
              }
              else{
                return value;
              }
            }
          },
          {
            key: 'description',
            label: 'Descripción',
            fn: function(value,object){
              if(!value){
                return '';
              }
              else{
                return value;
              }
            }
          },
          {
            label: 'Acciones',
            fn: function(value,object){
              return new Spacebars.SafeString('<a class="btn-floating waves-effect waves-light blue editar-training"  title="Editar training" data-id='+
              object._id
              +'><i class="material-icons">create</i></a>'
              +'&nbsp;'
              +'<a class="btn-floating waves-effect waves-light red delete-training"  title="Borrar training" data-id='+
              object._id
              +'><i class="material-icons">delete</i></a>');
            }
          }
      ]
    }
  }
})

Template.trainingsMaintenanceTable.events({
  'click .editar-training': (evt, template) => {
    let trainingId = $(evt.currentTarget).data('id');
    let training = Trainings.findOne({_id: trainingId})
    Session.set('currentTraining', training);
    template.find('#training-title').value = training.title;
    template.find('#training-description').value = training.description;
    $("#editTrainingModal").openModal();
  },
  'click .delete-training': (evt, tem) => {
    let trainingId = $(evt.currentTarget).data('id');
    Meteor.call('deleteTraining', trainingId);
  },
  'click .create-training-button': (evt, template) => {
    $("#createTrainingModal").openModal();
  }
})

Template.editTrainingModalBody.helpers({
  training: () => {
    return Session.get('currentTraining');
  }
})

Template.editTrainingModalBody.events({
  'click .update-training': (evt, template) => {
    let updatedTraining = {
      title: template.find('#training-title').value,
      description: template.find('#training-description').value
    }
    let setObject = {
      '$set': updatedTraining
    }
    template.find('#training-title').value = "";
    template.find('#training-description').value = "";
    Meteor.call('updateTraining', Session.get('currentTraining')._id, {$set: updatedTraining})
    console.log('saved!', updatedTraining)
  }
})

Template.createTrainingModalBody.events({
  'click .create-training': (evt, template) => {
    let createObject = {
      title: template.find('.create-training-title').value,
      description: template.find('.create-training-description').value,
      category: template.find('.create-training-category').value,
      youtubeId: template.find('.create-training-youtubeid').value,
      date: new Date()
    }

    // clear inputs
    template.find('.create-training-title').value = "";
    template.find('.create-training-description').value = "";
    template.find('.create-training-category').value = "";
    template.find('.create-training-youtubeid').value = "";

    Trainings.insert(createObject);
  }
})
