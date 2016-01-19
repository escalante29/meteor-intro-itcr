
Meteor.methods({
  'deleteTraining': (trainingId) => {
    Trainings.remove({_id: trainingId});
    console.log('removed: ', trainingId);
  },
  'updateTraining': (trainingId, setObject) => {
    Trainings.update(trainingId, setObject);
  }
})
