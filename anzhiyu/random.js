var posts=["2023/11/21/3D旋转轮播/","2023/11/23/好用的小网站/","2023/11/21/动态变化时钟/","2023/11/21/更新日志/","2023/11/21/文章样式请参考/","2023/12/01/今贝口乞虫它/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };