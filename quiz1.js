var questions = [

	{
		prompt: "\n What is something that you can do to prevent obesity? (input a/b/c/d) \n \n(a) Consume less processed and sugary foods \n(b) Eat more servings of vegetables and fruits \n(c) Eat plenty of dietary fiber \n(d) All of the above",
		
		answer: "d"
	},
	
	{
		prompt: "\n What are the characteristics of foods that are energy dense? (input a/b/c/d) \n \n(a) Low in calories but high in nutrients \n(b) Low in calories but high in fat \n(c) High in calories but low in nutrients \n(d) High in calories and nutrients",
		
		answer: "d"
	},
	
	{
		prompt: "\n Which of these are NOT a food group included on the food plate? (input a/b/c/d) \n \n(a) Protein \n(b) Dairy \n(c) Sugars \n(d) Grains",
		
		answer: "c"
	},
	
	{
		prompt: "\n Why doesn't the food plate include exactly how much we should eat from each food group? (input a/b/c/d) \n \n(a) Because it doesn't matter \n(b) Because everyone's energy needs are different \n(c) Because some people are vegetarians\n(d)  Because the amount we should eat from each food group is the same",
		
		answer: "b"
	},
	
	{
		prompt: "\n Which foods burn off body fat? (input a/b/c/d) \n \n(a) Food doesn't burn off fat \n(b) Grapefruit and kelp \n(c) Onions and Garlic \n(d) Hot chips",
		
		answer: "a"
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


