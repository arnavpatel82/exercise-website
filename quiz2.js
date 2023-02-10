var questions = [
	//prompt = question
	{
		prompt: "\n What are the three main components of total fitness? (input a/b/c/d) \n \n(a)  Physical activity, nutrition, and emotional wellbeing \n(b) How fast you run a mile, how many sit-ups you can do, and how many push-ups you can do \n(c) Strength, aerobics, and flexibility \n(d) Your age, your height, and your weight",
		
		answer: "a"
	},
	
	{
		prompt: "\n How much daily exercise does the U.S. Department of Health and Human Services recommend for children and teens? (input a/b/c/d) \n \n(a) 30 minutes \n(b) 45 minutes \n(c) 60 minutes \n(d) 90 minutes",
		
		answer: "c"
	},
	
	{
		prompt: "\n How is cardiorespiratory fitness measured? (input a/b/c/d) \n \n(a) By the ability of the heart, lungs, and blood to deliver oxygen to the body during exercise \n(b) By the ability of the heart, lungs, and blood to process CO2 \n(c) By how fast you can run a mile \n(d) By how much you sweat during exercise",
		
		answer: "a"
	},
	
	{
		prompt: "\n What's the strongest muscle in your body? (input a/b/c/d) \n \n(a) Your quick-thinking brain \n(b) Your fast-pumping heart \n(c) Your long-jumping legs \n(d) Your steel-crushing arms",
		
		answer: "b"
	},
	
	{
		prompt: "\n What is an immediate benefit of physical activity? (input a/b/c/d) \n \n(a) Reduced stress \n(b) Improved mood \n(c) Better sleep \n(d) All of the above",
		
		answer: "d"
	},
	
	
];




var score = 0; 

//for loop through the questions
for(var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	//prompt the user to input their annswer
	
	//checks if input is correct
	if(response === questions[i].answer){ 
		score++; 
		//the amount of questions answered correctly increases by one
		alert("\n Correct answer! \n");
		//user is informed answer is correct
	}
	
	else {
		alert("\n Wrong answer! \n");
		//user is informed answer is incorrect
	}
}

alert ("You got " + score + "/" + questions.length);
//final score is displayed


