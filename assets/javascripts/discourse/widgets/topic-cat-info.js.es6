import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('topic-cat-info', {
  buildKey: (args) => 'topic-cat',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}

 //33 - блоги, 20 - тестирование, 7 - Тоху, Правила 
  
  var qaid =  args.model.id;
  var catid =  args.model.category_id;
    
if (catid === 33) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это блоги </div>`}));  } 
if (catid === 20) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это раздел <a href="https://toxu.ru/c/test">для тестирования...</a> </div>`}));  }   
if (catid === 7) {  contents.push( new RawHtml({ html: `<div class="cat-blo"><font color=red>П</font>осмотрите о <a target="_blank" href="https://toxu.ru/features">возможностях Toxu.ru</a></div>`}));  }

if (qaid === 4117 && qaid === 4569) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это вопрос про общение. </div>`}));  } 
    
contents.push( new RawHtml({ html: `<div>  </div>`}));
    
return contents;
}});
