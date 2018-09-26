var json = {
    title: "JavaScript Trivia",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz on JavaScript. <br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "console",
                    title: "When trying to render information what would you type to populate information",
                    choices: [
                        "console.log", "console.post", "console.link", "console.add", "console.read"
                    ],
                    correctAnswer: "console.log"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "comment",
                    title: "When adding a comment in JS what would you type?'",
                    choicesOrder: "random",
                    choices: [
                        "--Message--", "'** Message **'", "'Message'", "'-Message-'"
                    ],
                    correctAnswer: "'--Message--'"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "arrays",
                    title: "When creating simple arrays, what is the proper syntax?",
                    choicesOrder: "random",
                    choices: [
                        "'Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'", "Car, Truck, Motorcycle, Airplane, Bus", "Car-Truck-Motorcycle-Airplane-Bus", "'Car' / 'Truck' / 'Motorcycle' / 'Airplane' / 'Bus'"
                    ],
                    correctAnswer: "'Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "JS on a website",
                    title: "The purpose of JavaScript on a website is to?",
                    choices: [
                        "Define the content of web pages", "Program the behavior of web pages", "Specify the layout of web pages",
                    ],
                    correctAnswer: "Program the behavior of web pages"
                }
            ]
        }, 
          {
            questions: [
                {
                    type: "radiogroup",
                    name: "Where to place JS",
                    title: "Inside which HTML element do we put the JavaScript?",
                    choices: [
                        "<JavaScript>", "<header>", "<script>",
                    ],
                    correctAnswer: "<script>"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Where to place JS 2",
                    title: "Where is the correct place to insert a JavaScript?",
                    choices: [
                        "The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct",
                    ],
                    correctAnswer: "Both the <head> section and the <body> section are correct"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Hello World",
                    title: "How do you write 'Hello World' in an alert box?",
                    choices: [
                        "msg('Hello World')", "alert('Hello World')", "alertbox('Hello World')",
                    ],
                    correctAnswer: "alert('Hello World')"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "Match",
                    title: "What is the proper syntax for a matching function?",
                    choices: [
                        "function match(var1, var2)", "match these(var1, var2)", "match function here(var1, var2)",
                    ],
                    correctAnswer: "function match(var1, var2)"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "for loop",
                    title: "What variables are required for a 'for' loop?",
                    choices: [
                        "var x = 0; x < object.length; x++", "var x = 0, & x < object.length, & x++", "object = 0; x < object.length; +2"
                    ],
                    correctAnswer: "alert('Hello World')"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Constructor Function",
                    title: "In a constructor function, what is the keyword to add a variable?",
                    choices: [
                        "add", "new", "+", "invent"
                    ],
                    correctAnswer: "add"
                }
            ]
        },
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.showPrevButton = true;

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.render("surveyElement");