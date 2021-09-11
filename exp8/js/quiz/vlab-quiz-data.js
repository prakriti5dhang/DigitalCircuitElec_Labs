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
            "q": "Determine the output frequency for a frequency division circuit that contains 12 flip-flops with an input clock frequency of 20.48 MHz.",
            "a": [
                {"option": "10.24 kHz", "correct": false},
                {"option": "30.24 kHz", "correct": false},
                {"option": "5 kHz", "correct": true},
                {"option": "15 kHz", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "Which statement BEST describes the operation of a negative-edge-triggered D flip-flop?",
            "a": [
                {"option": "The logic level at the D input is transferred to Q on NGT of CLK.", "correct": true},
                {"option": "The Q output is ALWAYS identical to the CLK input if the D input is HIGH.", "correct": false},
                {"option": "The Q output is ALWAYS identical to the D input when CLK = PGT.", "correct": false},
                {"option": "The Q output is ALWAYS identical to the D input.", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "How many flip-flops are in the 7475 IC?",
            "a": [
                {"option": "1", "correct": false},
                {"option": "2", "correct": false},
                {"option": "4", "correct": true},
                {"option": "8", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 4
            "q": "Which is not an Altera primitive port identifier?",
            "a": [
                {"option": "clk", "correct": false},
                {"option": "ena", "correct": false},
                {"option": "clr", "correct": true},
                {"option": "prn", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 5
            "q": "One example of the use of an S-R flip-flop is as a(n):",
            "a": [
                {"option": "racer", "correct": false},
                {"option": "astable oscillator", "correct": false},
                {"option": "binary storage register", "correct": true},
                {"option": "transition pulse generator", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};
