const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

//  <ul class="book-list card-column"></ul>
//Parent of li's
const ul = document.querySelector('.book-list');

ul.classList.add('row', 'gx-5');


//Child Elements of ul
books.forEach((elem)=>{
  //ParentElement
  const li = document.createElement('li');

  //Child Elements
  const img = document.createElement('img');
  const title = document.createElement('h3');
  const author = document.createElement('h4');
  const alreadyRead = document.createElement('span');
  const myDiv = document.createElement('div');
  const mySpan = document.createElement('span');

  // li
  li.classList.add('col-xs-12', 'col-md-6', 'col-lg-3');
  li.style.listStyle = 'none';
  // li.style.border = '2px solid black'

  // img
  img.src = elem.img;
  img.style.border = '5px solid black';
  img.style.width = '100%';
  img.style.aspectRatio = "4/5";
  img.style.objectFit = "cover";


  // title.style.border = '1px solid grey'
  // author.style.border = '2px solid black'

  //
  title.innerHTML = elem.title;
  author.innerHTML = elem.author;
  alreadyRead.innerHTML = elem.alreadyRead ? 'Read' : 'To read';


  author.style.display = 'flex';
  author.style.flexWrap = 'wrap';

  title.style.display = 'flex'
  title.style.flexWrap = 'wrap'

  
  myDiv.style.border = '1px solid grey'
  
  mySpan.style.borderTop = '1px solid grey'
  mySpan.style.backgroundColor = 'lightgrey';
  
  myDiv.append(img, title, mySpan);
  mySpan.append(alreadyRead)
  title.append(author)
  li.append(myDiv);

  ul.appendChild(li);

});