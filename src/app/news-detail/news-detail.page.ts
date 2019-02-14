import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  newsUrl: any;
  currentArticle: any;
  constructor(private newsService: NewsService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.newsUrl=this.newsService.currentArticle.url;
      this.currentArticle=this.newsService.currentArticle;
     // console.log(this.newsService.currentArticle)

  }

  onOpenPage(){
    window.open(this.newsUrl, '_system', 'location=yes'); return false;
  }

}
