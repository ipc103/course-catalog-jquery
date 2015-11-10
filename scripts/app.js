// Task: When we click on a text input, 
// and then move away without entering text, 
// we want to see an error msg
  $(addErrorMessage);

  function textInputs(){
    return $('input:text')
  };

  function addErrorMessage(){
    var $inputs = $(textInputs());  
    $inputs.on('blur', function(){
      debugger;
      var myInput = 
      var divText = myInput.el.parent().text()
      if( $(this).val().length < 1 && hasNoErrorMessage( divText,"You messed up!") ){
        $(this).after('You messed up!')  
      }
    })
  }

  // course_name_input = new Input(<input type='text'></input>)
  // course_name_input.hasErrorMessage
  // course_name_input.hasContent

  function Input(dom){
    this.el = $(dom)
  }

 

  function hasNoErrorMessage(string, substring ){
    if (string.indexOf(substring) === -1 ) {
      return true;
    } else {
      return false;
    }
  }
