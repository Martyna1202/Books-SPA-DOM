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

//  Sort by authors lastName
books.sort((a, b) => {
    const lastNameA = a.author.split(" ")[1];
    const lastNameB = b.author.split(" ")[1];
    // let result = lastNameA > lastNameB ? 1 : -1
    let result =  lastNameA.localeCompare(lastNameB);
    return result
});
    

//  'Import' of ul and add bootstrap class for flex
const ulOverview = document.querySelector('.book-list');
ulOverview.classList.add('row', 'gx-5')

//  add all books to DOM by JS
books.forEach(el => {
    
    const li = document.createElement('li');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const alreadyRead = document.createElement('span');
    const img = document.createElement('img');
    const attributeImg = document.createAttribute('target');
    const myDiv = document.createElement('div');
    const mySpan = document.createElement('div');
    const reverseNames = el.author.split(' ').reverse().join(', ');

    //  attribute 
    attributeImg.value = '_blank';
    
    //  li
    li.classList.add('col-xs-12', 'col-md-6', 'col-lg-3');
    li.style.listStyle = 'none';

    
    //  img
    img.src = el.img;
    img.style.width = '100%';
    img.style.aspectRatio = '4/5';
    img.style.objectFit = 'cover';
    img.style.border = '5px solid black';
    img.setAttributeNode(attributeImg);
    console.log(img.getAttribute('target'));
    
    img.onclick = () => {
        window.open(el.img, '_blank');
    };


    //  title
    title.textContent = el.title;
    title.style.display = 'flex';
    title.style.flexWrap = 'wrap';
    title.style.fontSize = '2rem';
    title.style.padding = '20px 10px 30px 15px';
    
    
    //  author
    author.textContent = reverseNames;
    author.style.fontSize = '1.5rem'
    author.style.padding = '20px 10px 30px 0px';
    author.style.color = 'grey';


    //  alreadyRead
    alreadyRead.textContent = el.alreadyRead ? 'Read' : 'To read';

    if(el.alreadyRead){
        alreadyRead.style.background = 'green';
    } else {
        alreadyRead.style.background = 'grey';
    }
    
    alreadyRead.style.fontSize = '1.5rem';
    alreadyRead.style.color = 'white';
    alreadyRead.style.borderRadius = '25px';
    alreadyRead.style.display = 'block';
    alreadyRead.style.width = '100px';
    alreadyRead.style.textAlign = 'center';
    

    //  myDiv
    myDiv.style.border = '1px solid grey';


    //  mySpan
    mySpan.style.background = '#F6F6F6';
    mySpan.style.padding = '30px';
    mySpan.style.borderTop = '1px solid #B6B6B6';
    mySpan.style.display = 'flex';
    mySpan.style.flexWrap = 'wrap';
    mySpan.style.justifyContent = 'flex-end';


    //  zusammenführen
    myDiv.append(img, title, mySpan);
    mySpan.append(alreadyRead)
    li.append(myDiv);
    title.append(author);
    ulOverview.appendChild(li);

});


