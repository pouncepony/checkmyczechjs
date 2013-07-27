var decDict=new Object();
decDict['type']=0
decDict['nom']=1
decDict['gen']=2
decDict['dat']=3
decDict['acc']=4
decDict['voc']=5
decDict['loc']=6
decDict['oloc']=7
decDict['inst']=8
decDict['nomp']=9
decDict['genp']=10
decDict['datp']=11
decDict['accp']=12
decDict['vocp']=13
decDict['locp']=14
decDict['instp']=15
decDict['err1']=16
decDict['err2']=17
decDict['err3']=18

var questions=new Array(['Je','','nom'],['Bez','','gen'],['K','','dat'],
['Vidím','','acc'],['Volám:','!','voc'],['Po','','loc'],['O','','oloc']
,['S','','inst'],['Jsou',' (plural)','nomp'],['Bez',' (plural)','genp'],
['K',' (plural)','datp'],['Vidím',' (plural)','accp'],
['Volám:','! (plural)','vocp'], ['O',' (plural)','locp'],
['S',' (plural)','instp']);

var hrad=new Array('hrad','hrad','hradu','hradu','hrad','hrade'
  ,'hradě','hradu','hradem','hrady','hradů','hradům'
,'hrady','hrady','hradech','hrady','hrada','hradí','hradi');

var zena=new Array('žena','žena','ženy','ženě','ženu','ženo'
    ,'ženě','ženě','ženou','ženy','žen','ženám'
    ,'ženy','ženy','ženách','ženami','žení',
    'žene','ženech');

var mesto=['město','město', 'města', 'městu', 'město', 'město'
    , 'městě', 'městu', 'městem', 'města', 'měst'
    , 'městům','města', 'města', 'městech', 'městy'
    , 'městi','měste', 'městí']
    
var pan=['pán', 'pán', 'pána', 'pánovi', 'pána'
    , 'páne', 'pánovi', 'pánovi', 'pánem', 'pánové'
    , 'pánů', 'pánům', 'pány', 'pánové',
    'pánech', 'pány', 'pání', 'páně', 'páno'];
    
var muz=["muž", "muž", "muže", "mužovi", "muže","muži", "mužovi", "mužovi", "mužem",
"mužové", "mužů", "mužům", "muže", "mužové", "mužích", "muži", "muža", "muží", "mužu"];

var stroj=["stroj", "stroj", "stroje", "stroji", "stroj","stroji", "stroj", "stroj", "strojem",
    "stroje", "strojů", "strojům", "stroje", "stroje", "strojích", "stroji", "strojí",
    "strojě", "strojou"];

var predseda=["předseda","předseda","předsedy", "předsedovi", "předsedu", "předsedo"
, "předsedovi", "předsedovi", "předsedou", "předsedové", "předsedů", "předsedům"
, "předsedy", "předsedové", "předsedech", "předsedy", "předsedě", "předsedem", "předsede"]

var soudce=["soudce", "soudce","soudce", "soudcovi", "soudce", "soudce", "soudcovi"
, "soudcovi", "soudcem", "soudcové", "soudců", "soudcům", "soudce", "soudcové"
, "soudcích", "soudci", "soudče", "soudcí", "soudcech"]

var more=["moře", "moře", "moře", "moři", "moře", "moře", "moři", "moři", "mořem"
, "moře","moří", "mořím", "moře", "moře", "mořích", "moři", "mořu", "moř", "mořy"]

var kure=["kuře", "kuře","kuřete", "kuřeti", "kuře", "kuře", "kuřeti", "kuřeti"
, "kuřetem", "kuřata", "kuřat", "kuřatům", "kuřata", "kuřatech", "kuřaty", "kuři"
, "kuřovi", "kuřům"]

var staveni=["stavení", "stavení", "stavení", "stavení", "stavení", "stavení",
"stavení", "stavení", "stavením", "stavení", "stavení", "stavením", "stavení", 
"stavení", "staveních", "staveními","staveně", "staveni", "stavenu"]

var ruze=["růže", "růže", "růže", "růži", "růži", "růže", "růži", "růži","růží"
, "růže", "růží", "růžím", "růže", "růže", "růžích", "růžemi","růžou", "růžy", "růžem"]

var pisen=["píseň", "píseň", "písně", "písni", "píseň", "písni", "písni", "písni"
, "písní", "písně", "písní", "písním", "písně", "písně", "písních", "písněmi"
,"písnou", "píseně", "písna"]

 var kost=["kost", "kost", "kosti", "kosti", "kost", "kosti", "kosti", "kosti"
 , "kostí", "kosti", "kostí", "kostem", "kosti", "kosti", "kostech", "kostmi"
 ,"kostě", "kostím", "kostích"]
 
  
    



var verbs=[pan, muz,predseda, soudce,hrad,stroj,mesto,more, kure, staveni,zena, ruze, pisen, kost];