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
            "q": "The bit sequence 0010 is serially entered (right-most bit first) into a 4-bit parallel out shift register that is initially clear. What are the Q outputs after two clock pulses?",
            "a": [
                {"option": "0000", "correct": false},
                {"option": "0010", "correct": false},
                {"option": "1000", "correct": true},
                {"option": "1111", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "What is a shift register that will accept a parallel input, or a bidirectional serial load and internal shift features, called?",
            "a": [
                {"option": "universal", "correct": true},
                {"option": "end around", "correct": false},
                {"option": "tristate", "correct": false},
                {"option": "conversion", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "How can parallel data be taken out of a shift register simultaneously?",
            "a": [
                {"option": "Use the Q output of the first FF.", "correct": false},
                {"option": "Use the Q output of the last FF.", "correct": false},
                {"option": "Tie all of the Q outputs together.", "correct": false},
                {"option": "Use the Q output of each FF.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 4
            "q": "What does the output enable do on the 74395A chip?",
            "a": [
                {"option": "It determines when data can be loaded.", "correct": false},
                {"option": "It forces all outputs to go HIGH.", "correct": false},
                {"option": "It forces all outputs to go LOW.", "correct": false},
                {"option": "It activates the three-state buffer.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 5
            "q": "To operate correctly, starting a ring shift counter requires:",
            "a": [
                {"option": "clearing all the flip-flops", "correct": false},
                {"option": "presetting one flip-flop and clearing all others", "correct": true},
                {"option": "clearing one flip-flop and presetting all others", "correct": false},
                {"option": "presetting all the flip-flops", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};
