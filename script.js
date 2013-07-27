var decList = new Array('type','nom','gen','dat','acc','voc','loc','oloc','inst',
    'nomp','genp','datp','accp','vocp','locp','instp','err1','err2','err3');





var verb;
var ans_index;
var ready=true;
var score=0;

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
Array.prototype.shuffle = function() {
 	var len = this.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = this[i];
  	this[i] = this[p];
  	this[p] = t;
 	}
};

function display_question(verb){
    //displays a question about the given verb and returns the
    //index of the answer
    var Nq=questions.length;
    var iq=getRandomInt(0,Nq-1);
    var chosenq=questions[iq];
    var question=chosenq[0]+' <span>['+verb[1]+']</span> '+chosenq[1]+'?';
    document.getElementById("question").innerHTML = question;
    return decDict[chosenq[2]];
}

function display_answers(verb,ans_index){
    //takes the verb and displays 4 answers including the correct answer
    var ans=new Array();
    var words=new Array();
    ans[0]=ans_index;
    words[0]=verb[ans_index]
    for (var i=1;i<4;i++) {
        var s=ans_index
        do{
            s=getRandomInt(decDict['nom'],decDict['err3']);
        }while (words.contains(verb[s]))
        ans[i]=s;
        words[i]=verb[s];
    }
    ans.shuffle();
    ans_html='';
    for (var j=0;j<4;j++) {
        ans_html+="<button onclick='take_answer("+ans[j]+")'>"+verb[ans[j]]+"</button><br>";
    }
    document.getElementById("answers").innerHTML =ans_html
}
function take_answer(chosen) {
    //evaluates the answer and displays the respose to the question in the response div
    if (ans_index==chosen && ready) {
        var response='Correct! The answer was '+verb[ans_index]+'. <br>';
        response+="<button class='sub' onclick='ask_question()'>Next!</button><br>";
        document.getElementById("response").innerHTML =response;
        ready=false;
        score+=1;
        updateScore();
    }else if(ready){
        var response="I'm sorry, the answer was "+verb[ans_index]+'. <br>';
        response+="<button class='sub' onclick='ask_question()'>Next!</button>";
        document.getElementById("response").innerHTML =response;
        ready=false;
        score-=1;
        updateScore();
    }
}

function ask_question() {
    document.getElementById("response").innerHTML =''
    verb=pickVerb();
    ans_index=display_question(verb)
    display_answers(verb,ans_index)
    ready=true
}

function updateScore() {
    document.getElementById("score").innerHTML ='Score: '+score
}

function pickVerb() {
    var Nv=verbs.length;
    return verbs[getRandomInt(0,Nv-1)];
}

ask_question()


