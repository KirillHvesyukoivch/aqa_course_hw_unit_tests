// Task 2.
 // Xpath/CSS: элемент с id - ‘submit’

const xpathFirst = "//*[@id='submit']";
const cssFirst = "#submit";

 // Xpath/CSS: все элементы с классом ‘txt’ 
const xpathSecond = "//*[@class='txt']";
const cssSecond = ".txt"

  //Xpath: первый элемент с классом ‘txt’
const xpathThird = "//*[@class='txt'][1]";

 // Xpath: кнопку которая содержит текст: ‘Remove comment’
 const хpathFourth = "//button[contains(text(), 'Remove comment')]";

  //Xpath: первый элемент с классом ‘one’ 
const xpathFifth = "//*[contains(@class, 'one')][1]";

  //Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 
const xpathSixth = "//*[@multitag2 = 'on']";
const cssSixth = "[multitag2='on']";

 // Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 
const xpathSeventh = "//div/*[@class = '‘content’']";
const cssSeventh = "div.content>*" 
 // CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 
 const cssEighth = "span.content, button.content"

 // Xpath: используя за основу селектор //*[@id='submit'] найти элемент body 
const xpathNinth = "//*[@id='submit']/ancestor::body"
