includeFile('Nets.QScript');
includeFile('Reverse.QScript');

dataFile = project.dataFiles[0]

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

log(__dirname);