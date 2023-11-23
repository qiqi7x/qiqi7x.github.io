var posts=["2023/11/21/3D旋转轮播/","2023/11/21/hello-world/","2023/11/23/好用的小网站/","2023/11/21/动态变化时钟/","2023/11/21/更新日志/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };