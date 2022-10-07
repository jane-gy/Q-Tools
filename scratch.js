includeFile('Nets.QScript');
includeFile('Reverse.QScript');

var dataFile = project.dataFiles[0];
// var qName = "QRATE_SEGMENTSr1"
// var hide = ['Don’t remember/Didn’t see']
// hideRow(dataFile, qName, hide);

// var pickOnes = getAllQuestionsByTypes([dataFile], ["Pick One"]);
// var qName = dataFile.getQuestionsByName("QGFE_INITIALIMPRESSIONr1")[0]
// log(typeof(qName))
// qName.dataReduction.rowLabels.forEach(element => {
//     log(element)
// });
// for (var i = 0; i < pickOnes.length; i++) {
//     var hideNet = false;
//     var labels = pickOnes[i].dataReduction.rowLabels
//     labels.forEach(label => {
//         if (/Top 2 Box .*/.test(label)) hideNet = true;
//     });

//     if (hideNet) {
//         topLabel = labels[labels.length-3];
//         bottomLabel = labels[labels.length-2];
//         pickOnes[i].dataReduction.hide(topLabel);
//         pickOnes[i].dataReduction.hide(bottomLabel);
//     }
// }

// // Useful for set of questions with the same core name.
// createNetAll(dataFile, "QAWARE_", [0,1], "Top 2 Box (Currently use + Used to use, but not now)", hidden=null);


// // Useful for questions with different names but have the same scale.
// list = ['QRATE', 'QWHY']
// for (var i = 0; i < list.length; i++) {
// 	createNet(dataFile, list[i] , [0,1], "net", "hidethis")
// }

var q = dataFile.getQuestionsByName('QTECH_PROVIDER_Lr')
q.forEach(x => {
	var i = x;

// 	i.dataReduction.moveAfter("Unsure    ", "Very unlikely    ");
//     i.dataReduction.hide("Top 2 Box (Very likely+Unsure)    ");
//     i.dataReduction.createNET([0,1], "Top 2 Box (Very likely+Somewhat likely)")
    i.dataReduction.moveAfter("Top 2 Box (Very likely+Somewhat likely)", "Unsure");

})

// var questions = dataFile.getQuestionsByName('QRESOURCES_SATr');

// questions.forEach(q => {
// 	reverseScale(q);
// });