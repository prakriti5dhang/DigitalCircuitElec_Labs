/*
 * 
 * Author: P K JANA
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1
            "q": "Decoder is a",
            "a": [
                {"option": "sequential circuit", "correct": false},
                {"option": "complex circuit", "correct": false},
                {"option": "combinational circuit", "correct": true},
                {"option": "gate", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "IC decoders are made with",
            "a": [
                {"option": "AND gate", "correct": false},
                {"option": "OR gate", "correct": false},
                {"option": "NAND gate", "correct": true},
                {"option": "XOR gate", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "Encoders are made by three",
            "a": [
                {"option": "AND gate", "correct": false},
                {"option": "OR gate", "correct": true},
                {"option": "NAND gate", "correct": false},
                {"option": "XOR gate", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 4
            "q": "A circuit that converts n inputs to 2^n outputs is called",
            "a": [
                {"option": "encoder", "correct": false},
                {"option": "decoder", "correct": true},
                {"option": "comparator", "correct": false},
                {"option": "carry look ahead", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};
