const post = {
  title: "", // название 
  author: "", // автор 
  date: "", // дата 
  text: "", // текст
  course: "", // курс
  picture: "", // картинка новости
  shortText: "", // краткий текст
};

const news = (post) => ({
  url:'',
  fullNews()=>{},
});

const task = (news) => ({
  create(),
  publish(),
  edit(),
  remove(),
});