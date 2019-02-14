import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  articles: any;


  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
     // console.log(data);
      this.data = data;
      this.articles = this.data.articles;
    })
  }

  onGoToNewsDetailPage(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']); 
  }

}
