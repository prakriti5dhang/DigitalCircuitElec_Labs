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
            "q": "What is the function of an enable input on a multiplexer chip?",
            "a": [
                {"option": "to apply Vcc", "correct": false},
                {"option": "to connect ground", "correct": false},
                {"option": "to active the entire chip", "correct": true},
                {"option": "to active one half of the chip", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "The expansion inputs to a comparator are used for expansion to a(n):",
            "a": [
                {"option": "4 bit system", "correct": false},
                {"option": "8 bit system", "correct": true},
                {"option": "BCD system", "correct": false},
                {"option": "counter system", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "A basic multiplexer principle can be demonstrated through the use of a:",
            "a": [
                {"option": "single-pole relay", "correct": false},
                {"option": "rotary switch", "correct": true},
                {"option": "DPDT switch", "correct": false},
                {"option": "linear stepper", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 4
            "q": "One multiplexer can take the place of:",
            "a": [
                {"option": "several SSI logic gates", "correct": false},
                {"option": "several SSI logic gates or combinational logic circuits", "correct": true},
                {"option": "combinational logic circuits", "correct": false},
                {"option": "several Ex-NOR gates", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 5
            "q": "Most demultiplexers facilitate which type of conversion?",
            "a": [
                {"option": "decimal to hexadecimal", "correct": false},
                {"option": "ac to dc", "correct": false},
                {"option": "single input, multiple outputs", "correct": true},
                {"option": "odd parity to even parity", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};
