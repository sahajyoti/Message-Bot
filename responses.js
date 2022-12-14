function getBotResponse(input) {
 
      //Bot sytarter Message
      if (input == "hi") {
        return 
      } else if (input == "862") {
        return "Are you interested in which code!" ;
      } else if (input == "java") {
        return "ok lets solve some problem"
      }


         //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "How can i help you!";
    }
    
}