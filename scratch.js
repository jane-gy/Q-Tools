includeFile('Nets.QScript');
includeFile('Reverse.QScript');

var dataFile = project.dataFiles[0];
var pickOnes = getAllQuestionsByTypes([dataFile], ["Pick One"]);
// var qName = dataFile.getQuestionsByName("QGFE_INITIALIMPRESSIONr1")[0]
// log(typeof(qName))
// qName.dataReduction.rowLabels.forEach(element => {
//     log(element)
// });
for (var i = 0; i < pickOnes.length; i++) {
    var hideNet = false;
    var labels = pickOnes[i].dataReduction.rowLabels
    labels.forEach(label => {
        if (/Top 2 Box .*/.test(label)) hideNet = true;
    });

    if (hideNet) {
        topLabel = labels[labels.length-3];
        bottomLabel = labels[labels.length-2];
        pickOnes[i].dataReduction.hide(topLabel);
        pickOnes[i].dataReduction.hide(bottomLabel);
    }
}

// // Useful for set of questions with the same core name.
// createNetAll(dataFile, "QGENREINTEREST_", [2,3], "Top 2 Box (Sometimes/Often)", hidden="INCORRECT NET");

// // Useful for questions with different names but have the same scale.
// list = ['QRATE', 'QWHY']
// for (var i = 0; i < list.length; i++) {
// 	createNet(dataFile, list[i] , [0,1], "net", "hidethis")
// }

// var q = dataFile.getQuestionsByName('QFEATURES_MOSTEXCITEDr')
// q.forEach(x => {
// 	var i = x;

// 	i.dataReduction.moveAfter("Missing data", "RANK 3");
// })

// var questions = dataFile.getQuestionsByName('QRESOURCES_SATr');

// questions.forEach(q => {
// 	reverseScale(q);
// });