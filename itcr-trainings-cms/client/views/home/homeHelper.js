Template.home.helpers({
  sampleDate: () => {
    return moment().format('LLLL')
  },
  trainings: () => {
    return Trainings.find({});
  }
})

Template.trainingSummaryTemplate.helpers({
})
