const questionnaire = [
  {
    title: 'age',
    question: 'Wie alt sind Sie?',
    isMandatory: true,
    dataType: 'date',
  },
  {
    title: 'height',
    question: 'Wie groß sind Sie in cm?',
    isMandatory: true,
    dataType: 'int',
  },
  {
    title: 'weight',
    question: 'Wieviel Kilogramm wiegen Sie?',
    isMandatory: true,
    dataType: 'int',
  },
  {
    title: 'genderChoice',
    question: 'Mit welchem Geschlecht identifizieren Sie sich?',
    isMandatory: false,
    dropdown: ['männlich', 'weiblich', 'divers'],
  },
  {
    title: 'genderBiological',
    question: 'Welches Geschlecht wurde Ihnen bei Geburt zugewiesen?',
    isMandatory: true,
    dropdown: ['männlich', 'weiblich'],
  },
  {
    title: 'previousTreatment',
    question: 'Wurden Sie in den letzten 4 Wochen ärztlich behandelt?',
    isMandatory: true,
    dataType: 'bool',
    ifTrueQuestion: 'Welche Behandlung wurde durchgeführt?',
    trueDataType: 'string',
  },
  {
    title: 'infect',
    question:
      'Wurde bei Ihnen in den letzten 4 Wochen eine Infektion festgestellt?',
    isMandatory: true,
    dataType: 'bool',
    ifTrueQuestion: 'Welche Infektion wurde festgestellt?',
    trueDataType: 'string',
  },
  {
    title: 'medication',
    question: 'Nehmen Sie regelmäßig Medikamente?',
    isMandatory: true,
    dropdown: ['Aspirin', 'Marcumar', 'Mirtazapin', 'Serotonin'],
    ifTrueQuestion: 'Wie hoch ist die Dosis in mg?',
    trueDataType: 'int',
  },
  {
    title: 'smoke',
    question: 'Rauchen Sie?',
    dataType: 'bool',
    isMandatory: true,
  },
  {
    title: 'telephoneNumber',
    question:
      'Damit Ihr Anästhesist Sie erreichen kann, bitte geben Sie Ihre Telefonnummer ein:',
    isMandatory: true,
    dataType: 'int',
  },
];

export default questionnaire;
