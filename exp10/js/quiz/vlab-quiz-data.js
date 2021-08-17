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
            "q": "Solving –11 + (–2) will yield which two's-complement answer?",
            "a": [
                {"option": "1110 1101", "correct": false},
                {"option": "1111 1001", "correct": false},
                {"option": "1111 0011", "correct": true},
                {"option": "1110 1001", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "What are constants in VHDL code?",
            "a": [
                {"option": "Fixed numbers represented by a name", "correct": true},
                {"option": "Fixed variables used in functions", "correct": false},
                {"option": "Fixed number types", "correct": false},
                {"option": "Constants do not exist in VHDL code.", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "The 2's-complement system is to be used to add the signed binary numbers 11110010 and 11110011. Determine, in decimal, the sign and value of each number and their sum.",
            "a": [
                {"option": "–113 and –114, –227", "correct": false},
                {"option": "–14 and –13, –27", "correct": true},
                {"option": "–11 and –16, –27", "correct": false},
                {"option": "–27 and –13, –40", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 4
            "q": "The most commonly used system for representing signed binary numbers is the:",
            "a": [
                {"option": "1's-complement system.", "correct": false},
                {"option": "sign-magnitude system.", "correct": false},
                {"option": "10's-complement system.", "correct": false},
                {"option": "2's-complement system.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 5
            "q": "The decimal value for E<sub>16</sub> is:",
            "a": [
                {"option": "15<sub>10</sub>", "correct": false},
                {"option": "14<sub>10</sub>", "correct": true},
                {"option": "13<sub>10</sub>", "correct": false},
                {"option": "12<sub>10</sub>", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};
