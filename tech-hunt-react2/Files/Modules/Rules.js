import React from 'react'
import { render } from 'react-dom'

var Rules = React.createClass({
  render() {
    return <div style = {{"marginLeft":"15%", "marginTop":"5%", "marginRight":"15%", "lineHeight":"1.8em", "textAlign":"justify"}}>
        <ul >
            <li className="li2">The event shall be held over <b>2 days</b>, from <b>00:00:00 on 21st November 2016</b> to <b>23:59:59 on 22nd November 2016</b>, Indian Standard Time (IST).</li>
            <li className="li2">Participation is open to <b>everyone</b>. Each participant represents <b>himself/herself only.</b></li>
            <li className="li2">The event entails an Online Cryptic Treasure Hunt in which participants must make their way through a series of cryptic levels.</li>
            <li className="li2">The participants' aim is to crack the levels as quickly as they can so as to place themselves at the top of the leaderboard.</li>
            <li className="li2">At each level, the participants will encounter a number of clues which shall all, together, point to one answer. <b>Each level has one and only one correct answer.</b></li>
            <li className="li2">Official clues may be released on the forum <b>if and when deemed necessary by the organisers</b>.</li>
            <li className="li2">Answers will always be <b>lower-case, alphanumeric and will contain no spaces, unless stated otherwise. Special characters are allowed</b>. If the answer to <b>Level 0 is "+//2Hello.1World3\\-"</b>, input <b>"+//2hello.1world3\\-".</b></li>
            <li className="li2">Don't ignore any of the clues. <b>If they weren't important, they wouldn't be there.</b></li>
            <li className="li2"><b>Beware of the spelling you enter</b>, we cannot auto correct your spellings.</li>
            <li className="li2"><b>Sharing of answers with other participants</b> in any form is banned. <b>This also includes providing hints towards the clues/answer.</b> The organisers reserve the right to disqualify or refuse participation to any participant without prior notice.</li>
        </ul></div>
  }
})

module.export = Rules;
render(<Rules/> ,document.getElementById('app'));
