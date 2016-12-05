var Questions = {
  0:{question:"What Do You Hear First When You Wake Up",answer:"github"},
  1:{question:"What Do You Call When 2 Pikachu Do Thunderbolt To You",answer:"dualshock"},
  checkAns:function(level,answer){
    return answer == Questions[level].answer;
  }
}

module.exports = Questions
