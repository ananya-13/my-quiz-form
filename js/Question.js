class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter correct option number");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createElement('h4')
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.option3=createElement('h4')
    this.option4=createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
    //Add hide() for questions, options & input box
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.message.hide();
    
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("what starts and end with letter T and has Tea in it ?");
    this.question.position(150, 60);

    this.option1.html("Elephant");
    this.option1.position(150, 80);
    
    this.option2.html("Team");
    this.option2.position(150, 100);

    this.option3.html("Tea Pot");
    this.option3.position(150, 120);

    this.option4.html("Transport");
    this.option4.position(150, 140);


    this.input1.position(150, 230);
    this.input2.position(150,270);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thankyou your Answer have been Submitted")
    this.message.position(300,350)
    })


  }
}
